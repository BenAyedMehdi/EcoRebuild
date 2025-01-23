import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Text, Img } from "components";
import ProgressBar from "components/ProgressBar";
import LandingPageHeader from "components/LandingPageHeader";
import LandingPageFooter from "components/LandingPageFooter";
import { general } from "general";

const FundraiserPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Enhanced placeholder data
  const campaignData = {
    title:
      "Clean Camp Initiative: Restoring Dignity Through Environmental Action",
    subtitle:
      "Join us in transforming refugee camps into cleaner, healthier spaces for families",
    goal: 20000,
    raised: 5360,
    donors: 128,
    daysLeft: 45,
    videoUrl: "https://www.youtube.com/embed/your-video-id",
    donateUrl: "https://www.gofundme.com/your-campaign-link",
    heroImage: "ecorebuild_images/projects/camp-cleanup.jpg", // Placeholder image
    updates: [
      {
        date: "2024-03-15",
        title: "First Milestone Reached!",
        content:
          "Successfully completed initial waste assessment of target areas.",
      },
      {
        date: "2024-03-10",
        title: "Community Meeting Success",
        content:
          "Over 50 local volunteers signed up for the cleanup initiative.",
      },
    ],
    impactMetrics: [
      {
        number: "2,500",
        label: "People Impacted",
        description: "Direct beneficiaries of the cleanup",
      },
      {
        number: "15",
        label: "Tons of Waste",
        description: "Targeted for removal and processing",
      },
      {
        number: "100%",
        label: "Local Employment",
        description: "Jobs created for camp residents",
      },
    ],
    faqs: [
      {
        question: "How will the funds be used?",
        answer:
          "Funds will be allocated to waste removal equipment (40%), labor costs (30%), recycling programs (20%), and administrative costs (10%).",
      },
      {
        question: "How can I get involved beyond donating?",
        answer:
          "You can volunteer, spread awareness, or contribute expertise in waste management and environmental conservation.",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <LandingPageHeader />

      {/* Hero Section with Parallax Effect - Improved Mobile Responsiveness */}
      <div
        className="relative h-[60vh] md:h-[80vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${campaignData.heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="text-center text-white w-full max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-fade-in">
              {campaignData.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 leading-relaxed max-w-2xl mx-auto">
              {campaignData.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href={campaignData.donateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-block bg-green-600 text-white px-6 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-green-700 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                aria-label="Donate to our campaign"
              >
                Donate Now
              </a>
              <button
                onClick={() => {
                  const element = document.getElementById("learn-more");
                  element.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-white/20 transition-all"
                aria-label="Learn more about our campaign"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Campaign Progress Card - Improved Mobile Layout */}
      <div className="max-w-4xl mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-white rounded-xl shadow-2xl p-4 sm:p-6 md:p-8 transform hover:shadow-3xl transition-all duration-300">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6">
            <div className="text-center p-3 transform hover:scale-105 transition-all">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                ${campaignData.raised.toLocaleString()}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                raised of ${campaignData.goal.toLocaleString()} goal
              </p>
            </div>
            <div className="text-center p-3 transform hover:scale-105 transition-all">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                {campaignData.donors}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                generous donors
              </p>
            </div>
            <div className="text-center p-3 transform hover:scale-105 transition-all">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                {campaignData.daysLeft}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                days remaining
              </p>
            </div>
          </div>
          <ProgressBar
            value={(campaignData.raised / campaignData.goal) * 100}
            className="h-3 sm:h-4 bg-gray-200 rounded-full overflow-hidden"
            barClassName="h-full bg-green-600 transition-all duration-1000"
          />
        </div>
      </div>

      {/* Main Content - Improved Mobile Layout */}
      <div
        id="learn-more"
        className="max-w-4xl mx-auto px-4 py-8 sm:py-12 md:py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              About This Campaign
            </h2>

            {/* Video Section */}
            <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-full">
                {!isVideoPlaying ? (
                  <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                    onClick={() => setIsVideoPlaying(true)}
                    role="button"
                    aria-label="Play video"
                  >
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all">
                      <svg
                        className="w-10 h-10 text-green-600 ml-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <iframe
                    className="w-full h-full"
                    src={campaignData.videoUrl}
                    title="Campaign Video"
                    allowFullScreen
                    aria-label="Campaign video player"
                  ></iframe>
                )}
              </div>
            </div>

            {/* Campaign Content */}
            <div className="prose max-w-none">
              <section className="mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-900">
                  The Challenge
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  In refugee camps, waste management has become a critical
                  environmental and health concern. Improper disposal affects
                  water quality, creates health hazards, and diminishes the
                  dignity of camp residents.
                </p>
              </section>

              <section className="mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-900">
                  Our Solution
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  We're implementing a comprehensive waste management system
                  that includes:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                  <li>Community-led cleanup initiatives</li>
                  <li>Sustainable waste sorting and recycling programs</li>
                  <li>Educational workshops on waste management</li>
                  <li>Employment opportunities for camp residents</li>
                </ul>
              </section>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Updates Section */}
            <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">
                Campaign Updates
              </h3>
              <div className="space-y-4">
                {campaignData.updates.map((update, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-green-600 pl-3 sm:pl-4 py-2"
                  >
                    <time className="text-xs sm:text-sm text-gray-500">
                      {update.date}
                    </time>
                    <h4 className="font-semibold text-gray-900 mt-1 text-base sm:text-lg">
                      {update.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 mt-1">
                      {update.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ways to Help */}
            <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-900">
                Ways to Help
              </h3>
              <div className="space-y-4">
                <a
                  href={campaignData.donateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 text-white text-center px-6 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Make a Donation
                </a>
                <button
                  className="block w-full bg-white border-2 border-green-600 text-green-600 text-center px-6 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all transform hover:scale-105"
                  onClick={() => {
                    navigator
                      .share({
                        title: campaignData.title,
                        text: campaignData.subtitle,
                        url: window.location.href,
                      })
                      .catch(console.error);
                  }}
                >
                  Share Campaign
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Metrics - Improved Mobile Layout */}
      <div className="bg-gray-900 text-white py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {campaignData.impactMetrics.map((metric, index) => (
              <div
                key={index}
                className="text-center p-4 sm:p-6 rounded-xl bg-white/5 backdrop-blur-sm transform hover:scale-105 transition-all"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                  {metric.number}
                </div>
                <div className="text-lg sm:text-xl font-semibold mb-2">
                  {metric.label}
                </div>
                <div className="text-sm sm:text-base text-gray-300">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section - Improved Mobile Layout */}
      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16 md:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 sm:space-y-6">
          {campaignData.faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                {faq.question}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <LandingPageFooter />
    </div>
  );
};

export default FundraiserPage;
