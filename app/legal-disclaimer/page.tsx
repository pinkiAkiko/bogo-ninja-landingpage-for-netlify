"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export default function LegalDisclaimerPage() {
  return (
    <>
    <Header />
    <div className="bg-white text-gray-800 py-12 px-6 md:px-16 lg:px-32 mt-12">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-bogo-dark-600 mb-6">
          Legal Disclaimer – Bogo Ninja App
        </h1>

        {/* <p className="text-gray-600 mb-2">
          <strong>Effective Date:</strong> [To be filled]
        </p> */}
        <p className="text-gray-600 mb-8">
          <strong>Last Updated:</strong> 11 September, 2025
        </p>

        <p className="mb-6 leading-relaxed">
          By using the Bogo Ninja mobile application (“App”), you agree to the
          terms outlined in this Disclaimer. If you do not agree, please
          discontinue use of the App immediately.
        </p>

        {/* Sections */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">1. General Information Only</h2>
          <p>
            Bogo Ninja provides access to restaurant promotions, coupons, and
            deals for informational and promotional purposes. We are not a food
            service provider and do not guarantee the quality, pricing,
            availability, or fulfillment of any product or service offered by
            third-party restaurants.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">2. Relationship with Restaurants</h2>
          <p className="mb-2">
            We operate as a digital marketing and promotional platform. All
            restaurant offers, deal terms, and redemptions are solely the
            responsibility of the respective restaurants. We are not liable for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Denial of service by a restaurant</li>
            <li>Changes or errors in deals</li>
            <li>Restaurant closures or operational issues</li>
            <li>Food safety, allergens, or dietary concerns</li>
          </ul>
          <p className="mt-3">
            We encourage users to confirm deal availability directly with the
            restaurant before visiting.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">3. Deal Limits and Variability</h2>
          <p>
            Deal availability, usage limits, and conditions may vary by
            restaurant, customer tier (e.g., premium members), time, or
            location. While we strive to keep deal information current, we do
            not guarantee its accuracy at all times.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">4. No Warranty</h2>
          <p className="mb-2">The App is provided on an “as is” and “as available” basis. We make no warranties, express or implied, including but not limited to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Merchantability</li>
            <li>Fitness for a particular purpose</li>
            <li>Non-infringement</li>
            <li>Availability or error-free operation</li>
          </ul>
          <p className="mt-3">Use of the App is at your own risk.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">5. Limitation of Liability</h2>
          <p className="mb-2">
            To the maximum extent permitted by applicable law, Bogo Ninja and its
            affiliates, directors, and employees are not liable for any direct,
            indirect, incidental, special, consequential, or punitive damages
            arising from:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use or inability to use the App</li>
            <li>Redemption of any offer</li>
            <li>Any interaction with a restaurant</li>
            <li>Unauthorized access to user data</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">6. Third-Party Content and Links</h2>
          <p>
            The App may include content or links from third-party platforms
            (e.g., restaurant websites, social media). We do not endorse,
            control, or take responsibility for such content.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">7. User Responsibility</h2>
          <p className="mb-2">Users are solely responsible for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Verifying deal details and restrictions before redemption</li>
            <li>Complying with local laws and terms of restaurant partners</li>
            <li>Maintaining the confidentiality of their account credentials</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">8. Modifications and Termination</h2>
          <p>
            We reserve the right to modify or discontinue the App or any
            features, at any time, without notice or liability.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">9. Governing Law</h2>
          <p>
            This Disclaimer is governed by the laws of the Province of British
            Columbia and the federal laws of Canada, without regard to conflict
            of law principles.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">10. Contact Us</h2>
          <p>If you have questions about this Disclaimer, contact:</p>
          <p className="mt-2">Email: support@bogoninja.com</p>
          {/* <p> Phone Number : +1 (123) 456-1234</p> */}
        </section>
      </div>
    </div>
    <Footer />
    </>
  );
}
