import './Recovery.css';
import React from 'react';

export default function Recovery({ onRouteChange, loadUser, baseUrl }) {

    const [recovery, setRecovery] = React.useState({
        rec_mail: "",
    });
    function handleChange(e) {
        const { name, value } = e.target;
        setRecovery((prev) => ({ ...prev, [name]: value }));
    }

    function onSubmitRecovery() {

        fetch(`${baseUrl}/recovery`, {
            method: "post",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                access_token: localStorage.getItem("userProfile"),
                rec_mail: recovery.rec_mail,
            }),
        })
            .then((response) => response.json())
            .then((user) => {
                onRouteChange("home");
            });
    }

    return (
        <article
            style={{ backgroundColor: "#1c1b1b" }}
            className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"
        >
            <main className="pa3 black-80 center">
                <div className="measure tc">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0 white">Add a recovery email</legend>
                        <div className="mt3">
                            <label
                                className="db fw5 lh-copy f5 white"
                                htmlFor="email-address"
                            >
                               Recovery Email helps in recovering the account in case you lose access
                            </label>
                            <input
                                className="pa2 input-reset ba bg-transparent white hover-white w-100"
                                type="text"
                                name="rec_mail"
                                id="new-pass"
                                onChange={handleChange}
                            />
                        </div>
                    </fieldset>
                    <div className="">
                        <input
                            className="b ph3 pv1 input-reset ba b--white bg-transparent grow pointer f5 dib white"
                            type="submit"
                            value="Save"
                            onClick={onSubmitRecovery}
                        />
                    </div>
                </div>
            </main>
        </article>
    );
}