"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export default function PrivacyPolicyPage() {
    return (
        <>
            <Header />
            <div className="bg-white text-gray-800 py-12 px-6 md:px-16 lg:px-32 mt-12">
                <div className="max-w-4xl mx-auto">
                    {/* Heading */}
                    <h1 className="text-3xl md:text-4xl font-bold text-bogo-dark-600 mb-6">
                        Privacy Policy – Bogo Ninja App
                    </h1>
{/* 
                    <p className="text-gray-600 mb-2">
                        <strong>Effective Date:</strong> [To be filled once finalized]
                    </p> */}
                    <p className="text-gray-600 mb-8">
                        <strong>Last Updated:</strong> 11 September, 2025
                    </p>

                    <p className="mb-6 leading-relaxed">
                        Bogo Ninja (“we”, “our”, “us”) values your privacy and is committed to
                        protecting your personal information. This Privacy Policy describes
                        how we collect, use, store, and disclose your information when you use
                        our mobile application (the “App”) in compliance with Canadian privacy
                        laws, including the Personal Information Protection and Electronic
                        Documents Act (PIPEDA).
                    </p>

                    {/* Sections */}
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Name</li>
                            <li>Email Address</li>
                            <li>Phone Number</li>
                            <li>Location Data (e.g., GPS for nearby deals)</li>
                            <li>Device Information (such as device ID, OS, IP address)</li>
                            <li>Account Details (for authentication and KYC purposes)</li>
                            <li>Social Login Info (when using Google, Facebook, etc.)</li>
                        </ul>
                        <p className="mt-3">
                            We may also collect non-identifiable information for analytics and
                            performance improvement.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Create and manage your user account</li>
                            <li>Authenticate users (including via social login)</li>
                            <li>Match users with relevant food deals based on location and preferences</li>
                            <li>Send push notifications and marketing updates (you may opt-out)</li>
                            <li>Ensure platform integrity (e.g., KYC verification for partners)</li>
                            <li>Improve the functionality and performance of the App</li>
                            <li>Comply with legal obligations and regulatory requirements</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-3">3. Payment Information</h2>
                        <p>
                            We do not currently store payment or financial information. If in the
                            future payment functionality is added, we will ensure PCI-DSS compliant
                            third-party processors handle transactions securely.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-3">4. Sharing of Information</h2>
                        <p className="mb-2">We do not sell or rent your personal information.</p>
                        <p>We may share limited information with your consent in cases such as:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>When redeeming a coupon with a partner restaurant</li>
                            <li>When legally required (e.g., under a court order)</li>
                            <li>
                                With trusted service providers (e.g., analytics, cloud hosting) who are
                                contractually bound to protect your data
                            </li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-3">5. Analytics and Advertising</h2>
                        <p>We may use third-party analytics services (e.g., Google Analytics for Firebase) and advertising platforms to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Analyze usage patterns</li>
                            <li>Deliver tailored promotions</li>
                            <li>Monitor app performance</li>
                        </ul>
                        <p className="mt-2">
                            These services may use cookies or SDKs to collect anonymized usage data.
                            You can opt out through device or ad platform settings.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-3">6. User Rights and Choices</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Access and update your personal information</li>
                            <li>Delete your account at any time</li>
                            <li>Withdraw consent to use your data (may affect app functionality)</li>
                            <li>Opt-out of push notifications and marketing emails via settings</li>
                        </ul>
                        <p className="mt-2">
                            Note: For legal, security, or fraud prevention purposes, some records
                            (e.g., purchase/redemption history) may be retained even after account
                            deletion.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-3">7. Data Security</h2>
                        <p>
                            We implement technical and organizational safeguards to protect your
                            data, including encryption, access control, and monitoring. However, no
                            method of transmission over the internet is 100% secure.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-3">8. Children’s Privacy</h2>
                        <p>
                            The App is not intended for users under the age of 13. We do not knowingly
                            collect personal data from minors without verified parental consent.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-3">9. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. If we make material
                            changes, we will notify you via the App or by email (if available).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">10. Contact Us</h2>
                        <p>
                            If you have any questions about this policy or our privacy practices,
                            please contact us at:
                        </p>
                        <p className="mt-2">Email: support@bogoninja.com</p>
                        {/* <p> Phone Number : +1 (123) 456-1234</p> */}
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
}
