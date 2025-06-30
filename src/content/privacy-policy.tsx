import React from "react";
import classNames from "classnames/bind";
import { Link } from "gatsby";

import { sendEmail } from "../helpers";

import * as styles from "../wrappers/information-block-wrapper/information-block-wrapper.module.scss";

const cx = classNames.bind(styles);

export const privacyPolicyData = [
  {
    title: "1. Introduction",
    description: (
      <>
        When you entrust us with your personal data, we promise in return to
        process this in a secure and transparent manner. We would appreciate if
        you would take the time to read through our privacy policy, so you are
        informed about how we handle your personal data.
        <br />
        The purpose of this privacy policy is to explain how&nbsp;
        <a 
                href="https://www.decard.io/"
                style={{ color: 'black' }}
              >
              DECARD
        </a>&nbsp;
        collects and
        processes your personal data when you interact with our website. The
        privacy policy applies to tagion.org.
        <br />
        At DECARD we receive data about all visitors on tagion.org.
      </>
    ),
  },
  {
    title: "2. Data Controller",
    description: (
      <>
        DECARD is the Data controller responsible for collecting and processing
        your personal data.
      </>
    ),
  },
  {
    title: "3. We Use Personal Data For The Following Purposes",
    description: (
      <>
        In the below, we describe how we process your personal data. We
        recommend that you do not send or inform us of any sensitive information
        when you use our website and its features.
        <br />
        We collect and process your personal information when you are
        using/requesting our digital services, customer communication,
        Marketing, newsletters, company announcements, and information about
        DECARD.
        <br />
        The necessary personal data is processed for the following purposes:
        <br />
        Delivery of service: We collect the data to enable us to deliver a
        digital service requested by you. Optimization and development: We use
        the data to optimize and develop the user experience of tagion.org and
        the services we provide. Statistics: We use the data to build usage
        statistics of our website, helping us to improve it. We process your
        personal data in order to communicate with you and to respond to your
        requests (e.g. providing service to you as a user and giving you the
        best possible service). We process your personal data in order to send
        you marketing material, newsletters, company announcements and other
        information from DECARD, which you have consented to receive and so that
        you receive marketing material and information about us via social media
        (for example LinkedIn), and personal data is also used to identify other
        persons who may be interested in DECARD. We process your personal data
        when you request access to DECARD's press materials. We collect the data
        directly from you.
        <br />
        We process the following categories of data about you:
        <br />
        <span className={`${cx("subtitle")} prompt-regular`}>
          General Personal Data
        </span>
        <br />
        Information about your behavior on our digital services (e.g. number of
        visits, information about how you access our digital services, including
        IP address, use of browsers and operating system, cookies, your domains
        of origin as well as what content you read). Information about clicks on
        our advertisements, including if you are doing this from the website of
        another organization or company. Name, telephone number, email address
        and company. User name and password. Bank account or other payment
        information and fee amounts. We process your personal data as described
        and on the following legal basis:
        <br />
        GDPR, Article 6(1)(a) (consent) This applies if you have signed the
        consent form. GDPR, Article 6(1)(f), (necessary for us to pursue a
        legitimate interest). Our legitimate interest is to provide a service
        which you have requested, to improve customer experience and to develop
        and improve our digital services (in terms of both functionality and
        system). It is in our interest to be able to give our business partners
        (agencies, photographers, design companies, sponsors, journalists etc.)
        access to our logo and design files. We store your personal data as long
        as it is necessary for the purposes mentioned:
        <br />
        We store your general personal data for up to two years from the date on
        which we registered your visit to our website. We store your personal
        data as long as you have consented to receive marketing material from
        us, including our newsletter and company announcements. We erase your
        data within six months from the date on which you unsubscribe receipt of
        marketing material, newsletters, company announcements and other
        information about DECARD. We store your personal data for the duration
        of our business relationship with you.
      </>
    ),
  },
  {
    title: "4. Receivers Of Your Personal Data",
    description: (
      <>
        Depending on the circumstances, DECARD may share your data with:
        <br />
        Suppliers, including IT suppliers, support, suppliers of goods and
        financial institutions, cooperating with us. Public authorities.
        Business partners.
      </>
    ),
  },
  {
    title: "5. Personal Data About Others",
    description: (
      <>
        If you provide personal data about other people (e.g. contact
        information for colleagues in the company in which you are employed),
        you must make sure that they agree to this, and that you have permission
        to provide us with such data. In addition, you must refer them to this
        privacy policy when you provide us with their data.
      </>
    ),
  },
  {
    title: "6. Transfer To Third Countries",
    description: (
      <>
        In certain situations, we will transfer your personal data to countries
        outside the EU/EEA. Please contact us if you want a list of relevant
        countries outside the EU/EEA.
        <br />
        We will ensure that there are appropriate safeguards using the standard
        contractual clauses for the transfer of personal data to third
        countries, as published by the European Commission.
      </>
    ),
  },
  {
    title: "7. Your Rights",
    description: (
      <>
        When we process your data, you have the following rights:
        <br />
        You have the right of access to, rectification or erasure of your
        personal data. You also have the right to object to the processing of
        your personal data and to have the processing of your personal data
        restricted. In particular, you have an unconditional right to object to
        the processing of your personal data for use for direct marketing
        purposes. If the processing of your personal data is based on your
        consent, you have the right to withdraw your consent at any time. Your
        withdrawal of consent will not affect the lawfulness of the processing
        performed before the withdrawal of your consent. You have the right to
        receive the personal data that you have provided yourself in a
        structured, commonly used and machine-readable format (data
        portability). You have the right to lodge a complaint with a supervisory
        authority, for example, the relevant Data Protection Agency. We will
        ensure that there are appropriate safeguards using the standard
        contractual clauses for the transfer of personal data to third
        countries, as published by the European Commission.
        <br />
        You can exercise your rights by contacting us, see section 8. If you
        have requested to receive information from DECARD, such as newsletters,
        and you no longer wish to receive these, you can unsubscribe at any time
        via the email that you receive or by contacting us.
        <br />
        These rights may be subject to conditions or restrictions. For example,
        you may not have the right to data portability in the case in question.
        It depends on the specific circumstances in connection with the
        processing activities.
      </>
    ),
  },
  {
    title: "8. Contact DECARD Regarding The Processing Of Personal Data",
    description: (
      <>
        If you wish to contact DECARD regarding our processing of your personal
        data, please write to{" "}
        <span className={cx("email")} onClick={() => sendEmail()}>
          info@tagion.org
        </span>
        .
        <br />
        If you are unhappy with our response, you can lodge a complaint with
        your local data protection authority.
      </>
    ),
  },
  {
    title: "9. Changes To In Our Privacy Policy",
    description: (
      <>
        This privacy policy replaces all previous versions. It will be necessary
        to update and amend this policy on an ongoing basis, and we reserve the
        right to update and amend it. In the event of an important amendment, we
        will notify you at{" "}
        <Link to="/" className={cx("link")}>
          tagion.org
        </Link>{" "}
        or send an email if we deem it necessary.
      </>
    ),
  },
];
