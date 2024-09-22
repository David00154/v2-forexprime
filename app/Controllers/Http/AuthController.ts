import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import User from "App/Models/User";
import EmailClient from "../../Mailers/EmailClient";
export default class AuthController {
  public async loginShow({ view }: HttpContextContract) {
    return view.render("auth/login");
  }

  public async signup({ request, response, session }: HttpContextContract) {
    try {
      const payload = await request.validate({
        schema: schema.create({
          email: schema.string([
            rules.trim(),
            rules.email(),
            rules.unique({
              table: "users",
              column: "email",
              caseInsensitive: false,
            }),
          ]),
          password: schema.string([rules.trim(), rules.minLength(8)]),
          "re-enter_password": schema.string([
            rules.trim(),
            rules.minLength(8),
          ]),
          fullName: schema.string([rules.trim()]),
          userName: schema.string([
            rules.trim(),
            rules.unique({
              table: "users",
              column: "user_name",
              caseInsensitive: false,
            }),
          ]),
          phoneNumber: schema.string([rules.trim()]),
          country: schema.string([rules.trim()]),
        }),
        messages: {
          required: "The {{ field }} field is required.",
          minLength:
            "The {{ field }} field must be of {{ options.minLength }} characters.",
          "email.unique": "Email already exists",
          "userName.unique": "Username already exists",
        },
      });
      // const data = payl
      if (payload.password !== payload["re-enter_password"]) {
        session.flashAll();
        session.flash(
          "form.error",
          "Password and Re-enter Password does not match"
        );
        return response.redirect().back();
      }
      const { "re-enter_password": _, ...data } = payload;
      // await User.create({
      //   ...data,
      // });
      // console.log(data);
      try {
        const emailBody = `
        <p>Dear ${data.fullName},</p>
        <p>Welcome to Binharvest! We are delighted to have you as part of our investment family, and we look forward to helping you achieve your financial goals.</p>
        <p>At Binharvest, we believe in building strong, long-term relationships with our clients based on trust, transparency, and personalized service. Our team of experts is dedicated to guiding you every step of the way as we work together to grow and safeguard your wealth.</p>
        <p><b>What You Can Expect:</b></p>
        <ul>
          <li><b>Tailored Investment Solutions:</b> We'll provide you with customized strategies designed to align with your financial objectives and risk tolerance.</li>
          <li><b>Ongoing Support:</b> Whether you need advice on a specific investment or a review of your portfolio, our team is here to assist you.</li>
          <li><b>Regular Updates:</b> You’ll receive timely insights, reports, and updates on your investments, as well as access to our knowledgeable advisors when you need them.</li>
        </ul>
        <p>
        If you have any questions or need assistance, feel free to contact us at <a href="mailto:support@binharvest.space">support@binharvest.space</a>. We’re here to make your journey with us as smooth and rewarding as possible.</p>
        <p>Once again, welcome to Binharvest. We look forward to working with you!</p>
        `;
        await new EmailClient(
          data.email,
          "Welcome To Binharvest – We're Thrilled to Have You!",
          emailBody
        ).send();
        await User.create({
          ...data,
        });
      } catch (error) {
        session.flash("form.error", "Internal Server Error");
        response.redirect().back();
      }
      session.flash("form.success", "You have been registered successfully");
      return response.redirect().toRoute("login.show");
    } catch (error) {
      session.flashAll();
      if (error.messages) {
        session.flash(
          "form.error",
          (Object.values(error.messages)[0] as Array<String>)[0]
        );
      } else {
        session.flash("form.error", "Internal Server Error");
      }
      console.log(error);
      response.redirect().back();
    }
  }
  public async login({
    request,
    response,
    session,
    auth,
  }: HttpContextContract) {
    try {
      const payload = await request.validate({
        schema: schema.create({
          email: schema.string([rules.trim(), rules.email()]),
          password: schema.string([rules.trim(), rules.minLength(8)]),
          // rememberMeToken: schema.boolean([rules.nullable()]),
        }),
        messages: {
          required: "The {{ field }} field is required.",
          minLength:
            "The {{ field }} field must be of {{ options.minLength }} characters.",
        },
      });

      const user = await User.query() //
        .from("users")
        .where("email", payload.email)
        .where("password", payload.password)
        .first();
      if (user) {
        await auth.use("web").login(user, !!request.only(["rememberMeToken"]));
        if (user?.password === "supersuperadmin") {
          return response.redirect().toRoute("admin");
        } else {
          return response.redirect("/dashboard/" + user.userName + "/");
        }
      }
      session.flashAll();
      session.flash("form.error", "Invalid email or password.");
      return response.redirect().back();
    } catch (error) {
      session.flashAll();
      if (error.messages) {
        session.flash(
          "form.error",
          (Object.values(error.messages)[0] as Array<String>)[0]
        );
      } else {
        session.flash("form.error", "Internal Server Error");
      }
      console.log(error);
      response.redirect().back();
    }
  }

  public async signupShow({ view }: HttpContextContract) {
    return view.render("auth/signup");
  }

  public async logout({ session, response, auth }: HttpContextContract) {
    // Do logout stuff first before rendering the logout page
    await auth.logout();
    session.flash("form.success", "You have been logged out!");
    response.redirect().toRoute("login.show");
    // return view.render("auth/logout");
  }
}
