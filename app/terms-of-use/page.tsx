
"use client"
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function TermsOfUsePage() {

  return (
    <>
    <Header />
    <div className="container mx-auto px-4 py-16 text-gray-800 mt-10">
      <h1 className="text-3xl font-bold mb-6">Terms of Use – Bogo Ninja App</h1>
      {/* <p className="mb-6">Effective Date: [To be filled]</p> */}
      <p className="mb-6">Last Updated: 11 September, 2025</p>

      <p className="mb-6">
        These Terms of Use ("Terms") govern your access to and use of the Bogo Ninja
        mobile application (“App”) and services provided by Bogo Ninja ("we", "our", or
        "us"). By downloading, accessing, or using the App, you agree to be bound by
        these Terms. If you do not agree, do not use the App.
      </p>

      <h2 className="text-xl font-semibold mb-2">1. Eligibility</h2>
      <p className="mb-6">
        You must be at least 13 years old to use the App. By using the App, you
        represent that you meet this requirement and have the legal capacity to enter
        into these Terms.
      </p>

      <h2 className="text-xl font-semibold mb-2">2. Account Registration and KYC</h2>
      <p className="mb-6">
        To access deals or publish offers, users must register an account and may be
        required to verify identity through KYC (Know Your Customer) processes. Restaurant
        partners must also register and pass KYC checks to list offers. You agree to
        provide accurate, current, and complete information. You are responsible for
        maintaining the confidentiality of your login credentials.
      </p>

      <h2 className="text-xl font-semibold mb-2">3. Use of Coupons and Deals</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Deals are exclusive to Bogo Ninja and may have specific terms, usage limits, or validity periods.</li>
        <li>Redemption requires scanning a QR code at the participating restaurant.</li>
        <li>You may not reproduce, resell, or transfer deals to others.</li>
        <li>We reserve the right to revoke any deal if misuse, fraud, or abuse is detected.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">4. Premium Features</h2>
      <p className="mb-6">
        We may offer premium plans with enhanced features, such as early access or
        exclusive deals. Subscriptions are subject to additional terms and may be billed
        on a recurring basis unless canceled.
      </p>

      {/* Continue with sections 5–14 the same way you structured them */}
      
      <h2 className="text-xl font-semibold mb-2">14. Contact</h2>
      <p className="mb-6">
        For questions or support, contact:<br />
        Email: support@bogoninja.com<br />
        {/* Phone Number : +1 (123) 456-1234 */}
      </p>
    </div>
    <Footer />
    </>
  );
}
