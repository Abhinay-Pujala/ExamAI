import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function GenerationContent({ content }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
      <article className="prose prose-invert prose-indigo max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </div>
  );
}
