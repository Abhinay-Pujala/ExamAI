import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function GenerationContent({ content }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 md:p-8">
      <article className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-slate-300 prose-strong:text-white prose-li:text-slate-300 prose-code:text-indigo-300 prose-pre:bg-slate-950 prose-table:border-slate-700 prose-th:text-white prose-td:text-slate-300">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </div>
  );
}
