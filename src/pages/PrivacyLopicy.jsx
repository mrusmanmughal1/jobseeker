import React from "react";
import ImageBanner from "../UI/ImageBanner";

const PrivacyLopicy = () => {
  return (
    <div>
      <ImageBanner text="Privacy Policy " />
      <div className="w-11/12 mx-auto py-10">
        <p className="text-xl font-semibold  text-btn-primary">
          Privacy Policy
        </p>
        <div className="flex flex-col gap-3 py-2">
          <p>
            7 Kings Code built the Jobs Shopper app as a Free app. This SERVICE
            is provided by 7 Kings Code at no cost and is intended for use as
            is.
          </p>
          <p>
            This page is used to inform visitors regarding our policies with the
            collection, use, and disclosure of Personal Information if anyone
            decided to use our Service.
          </p>
          <p>
            If you choose to use our Service, then you agree to the collection
            and use of information in relation to this policy. The Personal
            Information that we collect is used for providing and improving the
            Service. We will not use or share your information with anyone
            except as described in this Privacy Policy.
          </p>
          <p>
            The terms used in this Privacy Policy have the same meanings as in
            our Terms and Conditions, which are accessible at Jobs Shopper
            unless otherwise defined in this Privacy Policy.
          </p>
        </div>
        <p className="text-xl font-semibold  text-btn-primary">
          Information Collection and Use
        </p>
        <div className="flex flex-col gap-3 py-2">
          <p>
            For a better experience, while using our Service, we may require you
            to provide us with certain personally identifiable information,
            including but not limited to Name, Email, Address, Phone, Resume,
            Photo. The information that we request will be retained by us and
            used as described in this privacy policy.
          </p>
          <p>
            The app does use third-party services that may collect information
            used to identify you.
          </p>
          <p>
            Link to the privacy policy of third-party service providers used by
            the app
          </p>
          <ul>
            <li>
              <a href="#"> Google Play Services</a>
            </li>
            <li>
              <a href="#">Google Analytics for Firebase</a>
            </li>
            <li>
              <a href="#">Firebase Crashlytics</a>
            </li>
          </ul>
        </div>
        <p className="text-xl font-semibold  text-btn-primary">Log Data</p>
        <div className="flex flex-col gap-3 py-2">
          <p>
            We want to inform you that whenever you use our Service, in a case
            of an error in the app we collect data and information (through
            third-party products) on your phone called Log Data. This Log Data
            may include information such as your device Internet Protocol (“IP”)
            address, device name, operating system version, the configuration of
            the app when utilizing our Service, the time and date of your use of
            the Service, and other statistics.
          </p>
        </div>
        <p className="text-xl font-semibold  text-btn-primary">Cookies</p>
        <div className="flex flex-col gap-3 py-2">
          <p>
            Cookies are files with a small amount of data that are commonly used
            as anonymous unique identifiers. These are sent to your browser from
            the websites that you visit and are stored on your device’s internal
            memory.
          </p>
          <p>
            This Service does not use these “cookies” explicitly. However, the
            app may use third-party code and libraries that use “cookies” to
            collect information and improve their services. You have the option
            to either accept or refuse these cookies and know when a cookie is
            being sent to your device. If you choose to refuse our cookies, you
            may not be able to use some portions of this Service.
          </p>
        </div>
        <p className="text-xl font-semibold  text-btn-primary">
          Service Providers
        </p>
        <div className="flex flex-col gap-3 py-2">
          <p>
            We may employ third-party companies and individuals due to the
            following reasons:
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyLopicy;
