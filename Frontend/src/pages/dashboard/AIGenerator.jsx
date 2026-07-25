import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Sparkles, LoaderCircle, Copy, Check } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import toast from "react-hot-toast";

import DashboardLayout from "../../layouts/DashboardLayout.jsx";
import PrintableNotes from "../../components/print/PrintableNotes.jsx";

import { generateContent } from "../../services/generate.service.js";
import useAuth from "../../hooks/useAuth.js";

const OUTPUT_TYPES = [
  { id: "notes", icon: "📄", title: "Notes" },
  { id: "question-paper", icon: "📝", title: "Question Paper" },
  { id: "flashcards", icon: "🧠", title: "Flashcards" },
  { id: "summary", icon: "📚", title: "Summary" },
  { id: "mcqs", icon: "❓", title: "MCQs" },
  { id: "mind-map", icon: "🗺️", title: "Mind Map" },
];

const EDUCATION_LEVELS = [
  "School",
  "Intermediate",
  "Diploma",
  "Undergraduate",
  "Postgraduate",
  "Competitive Exam",
  "Professional Certification",
  "Other",
];

const AI_OPTIONS = [
  {
    key: "revisionPoints",
    label: "Include Revision Points",
  },
  {
    key: "examples",
    label: "Add Examples",
  },
  {
    key: "examFocused",
    label: "Exam Focused",
  },
  {
    key: "simpleLanguage",
    label: "Simple Language",
  },
];

const PREVIEW_FEATURES = [
  { icon: "📄", title: "Smart Notes" },
  { icon: "🧠", title: "Flashcards" },
  { icon: "📝", title: "Question Papers" },
  { icon: "📚", title: "Summaries" },
];

export default function AIGenerator() {
  const { user } = useAuth();

  // Study Details
  const [subject, setSubject] = useState("");
  const [educationLevel, setEducationLevel] = useState("Undergraduate");
  const [topic, setTopic] = useState("");

  //Generation Settings
  const [selectedOutput, setSelectedOutput] = useState("notes");

  const [options, setOptions] = useState({
    revisionPoints: true,
    examples: true,
    examFocused: true,
    simpleLanguage: false,
  });

  const [error, setError] = useState("");

  const [generatedContent, setGeneratedContent] = useState("");
  const [loading, setLoading] = useState(false);

  const [copied, setCopied] = useState(false);

  const printRef = useRef(null);

  const buildPromptPayload = () => {
    return {
      subject: subject.trim(),
      educationLevel,
      topic: topic.trim(),
      outputType: selectedOutput,
      options,
    };
  };

  const validatePromptPayload = (payload) => {
    if (!payload.subject) {
      return "Please enter a Subject.";
    }

    if (!payload.topic) {
      return "Please enter a Topic.";
    }

    return null;
  };

  const handleGenerate = async () => {
    setError("");
    setGeneratedContent("");

    const payload = buildPromptPayload();

    const validateError = validatePromptPayload(payload);

    if (validateError) {
      setError(validateError);
      return;
    }

    if (!user) {
      setError("Please Sign in to use AI Generation.");
      return;
    }

    try {
      setLoading(true);

      const response = await generateContent(payload, user);

      setGeneratedContent(response.content);

      setCopied(false);
    } catch (err) {
      console.log(err);
      setError("Failed to generate content. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: `${subject}_${topic}_ExamAI`,
  });

  const handleCopy = async () => {
    if (!generatedContent) return;

    try {
      await navigator.clipboard.writeText(generatedContent);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);

      toast.success("Copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy content.");
      console.log(err);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-colors duration-200 focus:border-indigo-500";

  return (
    <DashboardLayout title="AI Generator">
      <section className="flex-1 p-6 space-y-6">
        {/* Header */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-indigo-500/30 transition-all duration-200">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">
                AI Study Generator ✨
              </h1>

              <p className="mt-2 text-slate-400">
                Generate personalized notes, flashcards, summaries and question
                papers in seconds.
              </p>
            </div>

            <div className="hidden lg:flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10">
              <Sparkles className="text-indigo-400" size={28} />
            </div>
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-5 gap-6 items-start">
          {/* Left Panel */}
          <div className="col-span-2 rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-indigo-500/30 transition-all duration-200">
            <div className="space-y-6">
              <div className="pb-4 border-b border-slate-800">
                <h2 className="text-lg font-semibold text-white">
                  Study Details
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  Tell us what you want to study.
                </p>
              </div>
              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Subject / Course
                </label>

                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. DBMS, React, Operating Systems"
                  className={inputClass}
                />
              </div>

              {/* Education Level */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Education Level
                </label>

                <select
                  value={educationLevel}
                  onChange={(e) => setEducationLevel(e.target.value)}
                  className={inputClass}
                >
                  {EDUCATION_LEVELS.map((level) => (
                    <option key={level}>{level}</option>
                  ))}
                </select>
              </div>

              {/* Topic */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Topic
                </label>

                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g. Binary Search Trees"
                  className={inputClass}
                />
              </div>
              <div className="pt-2 pb-4 border-b border-slate-800">
                <h2 className="text-lg font-semibold text-white">
                  Generation Settings
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  Choose how you'd like the AI to generate your content.
                </p>
              </div>
              {/* Output Type */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-3">
                  Output Type
                </label>

                <div className="grid grid-cols-2 gap-3">
                  {OUTPUT_TYPES.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedOutput(type.id)}
                      className={`rounded-xl border p-4 text-left transition-all duration-200 cursor-pointer ${
                        selectedOutput === type.id
                          ? "border-indigo-500 bg-indigo-500/10"
                          : "border-slate-700 bg-slate-800 hover:border-indigo-500/30"
                      }`}
                    >
                      <div className="text-2xl">{type.icon}</div>

                      <p
                        className={`mt-2 font-medium ${
                          selectedOutput === type.id
                            ? "text-indigo-300"
                            : "text-white"
                        }`}
                      >
                        {type.title}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* AI Options */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-3">
                  AI Options
                </label>

                <div className="space-y-3">
                  {AI_OPTIONS.map((item) => (
                    <label
                      key={item.key}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={options[item.key]}
                        onChange={() =>
                          setOptions((prev) => ({
                            ...prev,
                            [item.key]: !prev[item.key],
                          }))
                        }
                        className="h-4 w-4 accent-indigo-600"
                      />

                      <span className="text-slate-300">{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Validate Output */}
              {error && (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                  {error}
                </div>
              )}

              {/* Generate Button */}
              <button
                onClick={handleGenerate}
                disabled={loading}
                type="button"
                className={`w-full flex items-center justify-center gap-2 rounded-xl  font-medium py-3 transition-colors duration-200 cursor-pointer ${
                  loading
                    ? "cursor-not-allowed bg-slate-700 text-slate-400"
                    : "cursor-pointer bg-indigo-600 hover:bg-indigo-500 text-white"
                }`}
              >
                {loading ? (
                  <>
                    <LoaderCircle size={18} className="animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles size={18} />
                    Generate with AI
                  </>
                )}
              </button>
              <p className="text-center text-sm text-slate-500">
                AI-generated content will appear instantly in the preview panel.
              </p>
            </div>
          </div>

          {/* Right Panel */}
          <div className="col-span-3 rounded-2xl border border-slate-800 bg-slate-900 hover:border-indigo-500/30 transition-all duration-200 h-full">
            <div className="flex flex-col h-full">
              {/* Preview Header */}
              <div className="flex items-center justify-between border-b border-slate-800 p-6">
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    Generated Content
                  </h2>
                  <p className="mt-1 text-sm text-slate-400">
                    Your AI-generated study material will appear here.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {/* Export PDF button */}
                  {generatedContent && (
                    <button
                      onClick={handlePrint}
                      className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500 cursor-pointer"
                    >
                      Export PDF
                    </button>
                  )}

                  {/* Copy button */}
                  <button
                    onClick={handleCopy}
                    disabled={!generatedContent}
                    className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all ${generatedContent ? "bg-slate-800 text-white hover:bg-slate-700 cursor-pointer" : "bg-slate-800 text-slate-500 cursor-not-allowed opacity-60"}`}
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 text-green-400" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        Copy
                      </>
                    )}
                  </button>

                  <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-400">
                    Preview
                  </span>
                </div>
              </div>

              {/* Empty State */}
              {!loading && !generatedContent && (
                <div className="flex flex-1 items-center justify-center p-8">
                  <div className="max-w-md text-center">
                    {/* Icon */}
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-500/10">
                      <Sparkles size={38} className="text-indigo-400" />
                    </div>

                    {/* Heading */}
                    <h3 className="mt-6 text-2xl font-bold text-white">
                      Ready to Generate
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-slate-400 leading-7">
                      Enter your subject, education level, topic and preferred
                      output type, then click
                      <span className="font-medium text-indigo-400">
                        {" "}
                        Generate with AI{" "}
                      </span>
                      to create personalized study material.
                    </p>

                    {/* Feature Cards */}
                    <div className="mt-8 grid grid-cols-2 gap-4">
                      {PREVIEW_FEATURES.map((feature) => (
                        <div
                          key={feature.title}
                          className="rounded-xl border border-slate-800 bg-slate-800/50 p-4"
                        >
                          <p className="text-2xl">{feature.icon}</p>
                          <p className="mt-2 text-sm font-medium text-white">
                            {feature.title}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Footer Note */}
                    <p className="mt-8 text-sm text-slate-500">
                      Your generated content can be copied, downloaded and saved
                      to history after generation.
                    </p>
                  </div>
                </div>
              )}

              {/* Loading State */}
              {loading && (
                <div className="flex flex-1 items-center justify-center p-8">
                  <div className="max-w-md text-center">
                    {/* Spinner */}
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-500/10">
                      <LoaderCircle
                        size={38}
                        className="animate-spin text-indigo-400"
                      />
                    </div>

                    {/* Heading */}
                    <h3 className="mt-6 text-2xl font-bold text-white">
                      Generating Study Material...
                    </h3>

                    {/* Description */}
                    <p className="mt-3 leading-7 text-slate-400">
                      Our AI is preparing personalized{" "}
                      <span className="font-medium text-indigo-400">
                        {selectedOutput.replace("-", " ")}
                      </span>{" "}
                      for
                      <span className="font-medium text-white">
                        {" "}
                        {topic || "your topic"}
                      </span>
                      .
                    </p>

                    {/* Footer */}
                    <p className="mt-8 text-sm text-slate-500">
                      This usually takes just a few seconds.
                    </p>
                  </div>
                </div>
              )}

              {/* Content Display */}
              {generatedContent && (
                <div className="flex-1 overflow-y-auto p-6">
                  <article className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-slate-300 prose-strong:text-white prose-li:text-slate-300 prose-code:text-indigo-300 prose-pre:bg-slate-950 prose-table:border-slate-700 prose-th:text-white prose-td:text-slate-300">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {generatedContent}
                    </ReactMarkdown>
                  </article>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Hidden div for pdf export */}
      <div
        style={{
          position: "absolute",
          left: "-99999px",
          top: 0,
        }}
      >
        <div ref={printRef}>
          <PrintableNotes
            subject={subject}
            topic={topic}
            educationLevel={educationLevel}
            content={generatedContent}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}
