import React, { useState } from 'react';

import './Footer.scss';
import AbuseForm from './Footer__form/AbuseForm';
import ContactForm from './Footer__form/ContactForm';

const Footer = () => {

  const [openPage, setOpenPage] = useState(false);

  const [websiteAgreement, setWebsiteAgreement] = useState(false);
  const [riskDisclaimer, setRiskDisclaimer] = useState(false);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [spamDisclaimery, setSpamDisclaimery] = useState(false);
  const [reportAbuse, setReportAbuse] = useState(false);
  const [contactUs, setContactUs] = useState(false);

  const buttonClick = (e) => {
    setOpenPage(true)

    switch(e.target.id) {
      case "Website Agreement":
        setWebsiteAgreement(true);
        break;

      case "Risk Disclaimer":
        setRiskDisclaimer(true);
        break;

      case "Privacy Policy":
        setPrivacyPolicy(true);
        break;

      case "Spam Disclaimer":
        setSpamDisclaimery(true)
        break;

      case "Report Abuse":
        setReportAbuse(true)
        break;

      case "Contact Us":
        setContactUs(true)
        break;

      default:
        break;
    }

  }

  const backgroundClick = () => {
    setOpenPage(false)
    setWebsiteAgreement(false)
    setRiskDisclaimer(false)
    setPrivacyPolicy(false)
    setSpamDisclaimery(false)
    setReportAbuse(false)
    setContactUs(false)
  }

  return (
  <footer className="footer">

    <div onClick={backgroundClick} className={openPage ? "footer__page open-page" : "footer__page"}>
    </div>

    <div className={openPage ? "footer__page-inner open-page open-page-text" : "footer__page-inner"}>
      <button onClick={backgroundClick} type="button" className="footer__page-inner-close">+</button>

      {websiteAgreement &&
      <div className="website-agreement">
        <h2>TERMS AND CONDITIONS</h2>
        <h3>1. Agreement</h3>
        <p>
          1.1  These Terms and Conditions are deemed a binding agreement between the client and the Company
        </p>
        <p>
          1.2  By using or otherwise accessing the Services, or clicking to accept or agree to these Terms and Conditions where that option is made available, client agrees for eligibility for use of the Services and that client has read, understood, and accepted these Terms and Conditions.
        </p>
        <h3>2. Eligibility</h3>
        <p>
          2.1  Client is allowed to use the Services if he/she are permitted in accordance with the law of their residence and/or domicile.
        </p>
        <p>
          2.2  The Company has no obligation or capability to verify whether client is eligible to use the Service and bears no responsibility for your use of the Service.
        </p>
      </div>
      }

      {riskDisclaimer &&
      <div className="risk-disclaimer">
        <h2>Disclaimer</h2>
        <h3>Risk Warning:</h3>
        <p>
          1.1.  The Company is not responsible for any direct, indirect or consequential losses as a result of using the Service.
        </p>
        <p>
          1.2.  New Technology. Client understands that using the Service is not limited to company platform, including other associated and related technologies are new and untested and outside of your or the Company’s control and adverse changes in market forces or the technology, broadly construed, will excuse the nonperformance by the Company under this Agreement including temporary interruption or permanent termination of your access to the Software and Services.
        </p>
        <p>
          1.3.  Unfavorable regulatory environment. 4th Industrial Revolution technologies have been the subject of scrutiny by various regulatory bodies around the world. The functioning of the Platform could be impacted by one or more regulatory inquiries or actions, including but not limited to restrictions of use of the Service.
        </p>
        <p>
          1.4.  Risk of theft and hacking. Hackers or other groups or organizations may attempt to steal your data and password in any number of ways.
        </p>
        <p>
          1.1.  The Company is not responsible for any direct, indirect or consequential losses as a result of using the Service.
        </p>
        <p>
          1.2.  New Technology. Client understands that using the Service is not limited to company platform, including other associated and related technologies are new and untested and outside of your or the Company’s control and adverse changes in market forces or the technology, broadly construed, will excuse the nonperformance by the Company under this Agreement including temporary interruption or permanent termination of your access to the Software and Services.
        </p>
        <p>
          1.3.  Unfavorable regulatory environment. 4th Industrial Revolution technologies have been the subject of scrutiny by various regulatory bodies around the world. The functioning of the Platform could be impacted by one or more regulatory inquiries or actions, including but not limited to restrictions of use of the Service.
        </p>
        <p>
          1.4.  Risk of theft and hacking. Hackers or other groups or organizations may attempt to steal your data and password in any number of ways.
        </p>
        <p>
          1.1.  The Company is not responsible for any direct, indirect or consequential losses as a result of using the Service.
        </p>
        <p>
          1.2.  New Technology. Client understands that using the Service is not limited to company platform, including other associated and related technologies are new and untested and outside of your or the Company’s control and adverse changes in market forces or the technology, broadly construed, will excuse the nonperformance by the Company under this Agreement including temporary interruption or permanent termination of your access to the Software and Services.
        </p>
        <p>
          1.3.  Unfavorable regulatory environment. 4th Industrial Revolution technologies have been the subject of scrutiny by various regulatory bodies around the world. The functioning of the Platform could be impacted by one or more regulatory inquiries or actions, including but not limited to restrictions of use of the Service.
        </p>
        <p>
          1.4.  Risk of theft and hacking. Hackers or other groups or organizations may attempt to steal your data and password in any number of ways.
        </p>
    </div>
      }

      {privacyPolicy &&
      <div className="privacy-policy">
        <h2>Privacy Policy</h2>
        <h3>1. Introduction</h3>
        <p>
          1.1.  This Privacy Policy explains how the Company uses client’s Personal Data (defined below) company provides access and utility through our platform via software, API (application program interface), technologies, products and/or functionalities (“Service”). In the course of providing Service, to abide by the laws in the jurisdictions that the company operates, and to improve services, company needs to collect and maintain personal information about the client. As a rule, the company never discloses any personal information about our customers to any non-affiliated third parties, except as described below.
        </p>
        <p>
          1.2.  Company may update this Privacy Policy at any time by posting the amended version on this site including the effective date of the amended version.
        </p>
        <p>
        1.3.  Company communicates any material changes to this Privacy Policy via email.
        </p>
        <h3>2. Definitions</h3>
        <p>
          2.1  Client is allowed to use the Services if he/she are permitted in accordance with the law of their residence and/or domicile.
        </p>
        <p>
          2.2  The Company has no obligation or capability to verify whether client is eligible to use the Service and bears no responsibility for your use of the Service.
        </p>
      </div>
      }

      {spamDisclaimery &&
      <div className="spam-Disclaimery">
        <h2>Spam Disclaimer</h2>
        <h3>General</h3>
        <p>
          1. E-mail messages from The Company are exclusively intended for the addressee(s).
        </p>
        <p>
          2. Company's e-mail messages (including any attachments) are company property and may be confidential or otherwise protected from publication.
        </p>
        <p>
          3. Any unauthorized use, reproduction or distribution of the message (in whole or in part) is expressly forbidden.
        </p>
        <p>
          4. If you have mistakenly received an e-mail from the Company, we would request that you inform the sender of this immediately by e-mail or by another means.
        </p>
        <p>
          5. We would also request that you immediately delete this e-mail and any attachment(s) from your system.
        </p>
        <p>
          6. The Company shall not be liable for incorrect or incomplete transmission of information by e-mail.
        </p>
        <p>
          7. Neither shall it be liable for any delay in receipt, or any damage caused as a result.
        </p>
        <p>
          8. The Company does not guarantee that the integrity of e-mail will be preserved during transmission. Nor does it guarantee that the message or files attached to it cannot be infected by digital viruses or other infections, or that the message cannot be intercepted. We draw your attention to the fact that e-mail and attached files may be subject to changes by third parties.
        </p>
      </div>
      }

      {reportAbuse &&
        <div className="report-abuse">
          <h2>Report Abuse</h2>
          <p>
            The website securestgains.com is used as a marketing material to promote advertisers by 3rd party promoters, affiliates, affiliate networks and ad networks.
          </p>
          <p>
            Anyone promoting this website is prohibited from using spam, spyware, incentivization, denial of service, use of wrong/false marketing material, your identity was used in prelanders prioir for you reaching thise page and any other illegal activity and is obligated to apply all local laws and regulations including GDPR rules where the users are sent from.
          </p>
          <p>
            If you have come to securestgains.com as a result of abuse activity (mentioned above or any other which is not) , please complete the form below to report the issue. We carefully examine every abuse report and we take action against the promoters.
          </p>
          <AbuseForm />
        </div>
      }

      {contactUs &&
        <div className="contact-us">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or feedback, you are welcome to contact us by using the form below:
        </p>
        <ContactForm />
      </div>
      }

    </div>

    <button onClick={(e) => buttonClick(e)} className="footer__button" type="button" id="Website Agreement">Website Agreement</button>

    <button onClick={(e) => buttonClick(e)} className="footer__button" type="button" id="Risk Disclaimer">Risk Disclaimer</button>

    <button onClick={(e) => buttonClick(e)} className="footer__button" type="button" id="Privacy Policy">Privacy Policy</button>

    <button onClick={(e) => buttonClick(e)} className="footer__button" type="button" id="Spam Disclaimer">Spam Disclaimer</button>

    <button onClick={(e) => buttonClick(e)} className="footer__button" type="button" id="Report Abuse">Report Abuse</button>

    <button onClick={(e) => buttonClick(e)} className="footer__button footer__button-last" type="button" id="Contact Us">Contact Us</button>

  </footer>
  );
}

export default Footer;
