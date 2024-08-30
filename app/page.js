"use client";
import { useState } from "react";
import slugify from "slugify";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [slug, setSlug] = useState("");

  const handleInputChange = (event) => {
    const text = event.target.value;
    setInputText(text);
    setSlug(slugify(text, { lower: true, strict: true }));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(slug);
    alert("Slug copied to clipboard!");
  };

  return (
    <main className="h-screen flex items-center max-w-5xl mx-auto justify-center text-center p-4">
      <div className="w-full">
        <div className="max-w-md mx-auto">
          <h1 className="font-bold text-3xl mb-4">Slugify AI</h1>

          <div className="mb-4">
            <input
              className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Enter text to generate slug"
              value={inputText}
              onChange={handleInputChange}
              autoFocus
            />
          </div>

          <div className="mb-4">
            <textarea
              className="border p-2 w-full rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="2"
              readOnly
              value={slug}
              placeholder="Generated slug will appear here"
            />
          </div>

          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleCopy}
          >
            Copy
          </button>
        </div>

        <div className="md:py-20 py-10">
          <div className="bg-gray-600/20 p-8 rounded">
            <h1 className="mb-4">
              World&apos;s First AI-Powered Slug Generator - Optimize Your URLs
              with Smart Technology
            </h1>

            <p className="">
              Discover the world&apos;s first AI-powered slug generator.
              Effortlessly create SEO-friendly, optimized URLs tailored to your
              content with cutting-edge AI technology. Enhance your
              website&apos;s performance and user experience today!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
