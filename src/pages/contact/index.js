import React from "react";
import { useForm } from "@formspree/react";

import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader/PageHeader";
import "./index.scss";

const heading = "Contact Us";
const intro =
  "Please use the below form to inquire about booking Shiver's Shaved Ice at your next event, ask a question, or leave us some feedback. We're always looking for ways to improve!";

const Index = () => {
  const [state, handleSubmit] = useForm("xzblweok");

  if (state.succeeded) {
    return (
      <Layout>
        <PageHeader heading={heading} introduction={intro} />
        <div className="thankyou_container">
          <h2 className="h2">Thank you for reaching out!</h2>
          We'll be in touch as soon as we can.
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHeader heading={heading} introduction={intro} />
      <section className="section">
        <div className="container">
          <div className="content">
            <form onSubmit={handleSubmit} name="contact">
              <div className="field">
                <label className="label" htmlFor={"name"}>
                  Name
                </label>
                <div className="control">
                  <input
                    className="input"
                    type={"text"}
                    name={"name"}
                    id={"name"}
                    required={true}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor={"email"}>
                  Email
                </label>
                <div className="control">
                  <input
                    className="input"
                    type={"email"}
                    name={"email"}
                    id={"email"}
                    required={true}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor={"message"}>
                  Message
                </label>
                <div className="control">
                  <textarea
                    className="textarea"
                    name={"message"}
                    id={"message"}
                    required={true}
                  />
                </div>
              </div>
              <div className="field">
                <button className="button is-link" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
