import { useEffect, useRef, useState } from "react";
import { IKImage } from "imagekitio-react";
import Upload from "../components/chatList/upload/Upload";
import "./newPromt.css";
import { ChevronDown, Sparkles } from "lucide-react";
import { openRouterAI } from "../components/openRouterAi";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { BeatLoader } from "react-spinners";
const NewPrompt = () => {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [selectedModel, setSelectedModel] = useState({
    label: "Navidia Nemotron",
    value: "nvidia/nemotron-3-super-120b-a12b:free",
  });
  const [messages, setMessages] = useState([
    // {
    //   id: 1,
    //   sender: 'ai',
    //   text: 'Hello. I am Aether, your high-performance intelligence interface. How can I assist your workflow today?'
    // },
    // {
    //   id: 2,
    //   sender: 'user',
    //   text: 'Can you explain the difference between zero-shot and few-shot prompting in a way that relates to developer productivity?'
    // },
    // {
    //   id: 3,
    //   sender: 'ai',
    //   text: (
    //     <div>
    //       <p className="mb-3">Certainly. From a developer productivity standpoint, the distinction lies in the trade-off between speed and precision:</p>
    //       <ul className="list-disc pl-5 space-y-2">
    //         <li><strong>Zero-Shot:</strong> The model completes a task without any prior examples. Ideal for standardized boilerplate or common syntax queries. It saves time by requiring less context injection.</li>
    //         <li><strong>Few-Shot:</strong> You provide 2-5 examples of the desired output format. Crucial for complex refactoring or maintaining specific architectural patterns where the "Aether style" needs to align with your project's local constraints.</li>
    //       </ul>
    //     </div>
    //   )
    // },
    // {
    //   id: 4,
    //   sender: 'user',
    //   text: 'Which one would you recommend for optimizing a complex Rust macro?'
    // },
    // {
    //   id: 5,
    //   sender: 'ai',
    //   text: 'For Rust macros, I strongly recommend Few-Shot. Macros are highly context-dependent and syntactically rigid. Providing even two examples of your desired expansion pattern will significantly reduce hallucinations and ensure the borrow checker remains satisfied.'
    // }
  ]);
  const [isModelMenuOpen, setIsModelMenuOpen] = useState(false);
  const [img, setImg] = useState({
    isLoading: false,
    error: "",
    dbData: {},
    aiData: {},
  });
  const [loading, setLoading] = useState(false);

  const [hasConversationStarted, setHasConversationStarted] = useState(false);
  const endRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleSelect = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModelMenuOpen(!isModelMenuOpen);
  };

  console.log("inpute text ", input);
  return (
    <>
      {/* conversation message */}

      {hasConversationStarted && (
        <div className="space-y-6 chats h-[66vh] overflow-auto min-w-[60vw] max-w-3xl mx-auto flex-1 flex flex-col justify-start">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex w-full ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[100%] rounded-2xl p-5 text-sm leading-relaxed tracking-normal ${
                  msg.sender === "user"
                    ? "bg-[#18181C] text-zinc-100 border border-zinc-800"
                    : "min-w-[100%] text-zinc-300 border border-zinc-900"
                }`}
              >
                <MarkdownPreview source={msg.text} />
              </div>
            </div>
          ))}

          {loading ? <BeatLoader size={10} color="#fff" /> : ""}
        </div>
      )}
      {img.isLoading && <div className="">Loading...</div>}
      {img.dbData?.filePath && (
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
          path={img.dbData?.filePath}
          width="380"
          transformation={[{ width: 380 }]}
        />
      )}
      <div className="endChat" ref={endRef}></div>
      <form className="newForm" ref={formRef}>
        <Upload setImg={setImg} />
        {/* Bottom Actions Row */}
        <div className="flex items-center justify-between pt-1 border-t border-zinc-900/50">
          <div className="flex items-center space-x-2 relative">
            {/* Model Selector Dropdown Button */}
            <button
              onClick={handleSelect}
              className="bg-[#18181C] hover:bg-zinc-800 border border-zinc-800 text-zinc-300 rounded-xl px-3 py-1.5 text-xs font-medium flex items-center gap-1.5 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
              <span>{selectedModel.label}</span>
              <ChevronDown className="w-3 h-3 text-zinc-500 ml-0.5" />
            </button>

            {/* Dropdown Menu Popup */}
            {isModelMenuOpen && (
              <div className="absolute bottom-12 left-0 bg-[#0D0D11] border border-zinc-800 rounded-xl py-1 w-44 shadow-xl z-50 text-xs">
                <button
                  onClick={() => {
                    setSelectedModel({
                      label: "Navidia Nemotron",
                      value: "nvidia/nemotron-3-super-120b-a12b:free",
                    });
                    setIsModelMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-zinc-300 hover:bg-zinc-800"
                >
                  Navidia Nemotron
                </button>
                <button
                  onClick={() => {
                    setSelectedModel({
                      label: "GPT Oss",
                      value: "openai/gpt-oss-120b:free",
                    });
                    setIsModelMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-zinc-300 hover:bg-zinc-800"
                >
                  GPT Oss
                </button>

                <button
                  onClick={() => {
                    setSelectedModel({
                      label: "GLM 4.5 Air",
                      value: "z-ai/glm-4.5-air:free",
                    });
                    setIsModelMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-zinc-300 hover:bg-zinc-800"
                >
                  GLM 4.5 Air
                </button>

                <button
                  onClick={() => {
                    setSelectedModel({
                      label: "Deepseek v4",
                      value: "deepseek/deepseek-v4-flash:free",
                    });
                    setIsModelMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-zinc-300 hover:bg-zinc-800"
                >
                  Deepseek V4
                </button>

                <button
                  onClick={() => {
                    setSelectedModel({
                      label: "Arcee AI",
                      value: "arcee-ai/trinity-large-thinking:free",
                    });
                    setIsModelMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-zinc-300 hover:bg-zinc-800"
                >
                  Arcee AI
                </button>

                <button
                  onClick={() => {
                    setSelectedModel({
                      label: "Baidu Cobuddy",
                      value: "baidu/cobuddy:free",
                    });
                    setIsModelMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-zinc-300 hover:bg-zinc-800"
                >
                  Baidu Cobuddy
                </button>

                <button
                  onClick={() => {
                    setSelectedModel({
                      label: "Google Gemma 4",
                      value: "google/gemma-4-31b-it:free",
                    });
                    setIsModelMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-zinc-300 hover:bg-zinc-800"
                >
                  Google Gemma 4
                </button>

                <button
                  onClick={() => {
                    setSelectedModel({
                      label: "Meta Llama 3.3",
                      value: "meta-llama/llama-3.3-70b-instruct:free",
                    });
                    setIsModelMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-zinc-300 hover:bg-zinc-800"
                >
                  Meta Llama 3.3
                </button>

                <button
                  onClick={() => {
                    setSelectedModel({
                      label: "Qwen 3",
                      value: "qwen/qwen3-next-80b-a3b-instruct:free",
                    });
                    setIsModelMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-zinc-300 hover:bg-zinc-800"
                >
                  Qwen 3
                </button>

                <button
                  onClick={() => {
                    setSelectedModel({
                      label: "Qwen 3 Coder",
                      value: "qwen/qwen3-coder:free",
                    });
                    setIsModelMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-zinc-300 hover:bg-zinc-800"
                >
                  Qwen 3 Coder
                </button>

                <button
                  onClick={() => {
                    setSelectedModel({
                      label: "LFM 2.5",
                      value: "liquid/lfm-2.5-1.2b-thinking:free",
                    });
                    setIsModelMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-zinc-300 hover:bg-zinc-800"
                >
                  LFM 2.5
                </button>

                <button
                  onClick={() => {
                    setSelectedModel({
                      label: "Nourresearch Hermes-3",
                      value: "nousresearch/hermes-3-llama-3.1-405b:free",
                    });
                    setIsModelMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-zinc-300 hover:bg-zinc-800"
                >
                  Nourresearch Hermes-3
                </button>

                <button
                  onClick={() => {
                    setSelectedModel({
                      label: "Dolphin Mistral",
                      value:
                        "cognitivecomputations/dolphin-mistral-24b-venice-edition:free",
                    });
                    setIsModelMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-zinc-300 hover:bg-zinc-800"
                >
                  Dolphin Mistral
                </button>

                <button
                  onClick={() => {
                    setSelectedModel({
                      label: "Poolside Laguna",
                      value: "poolside/laguna-xs.2:free",
                    });
                    setIsModelMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-zinc-300 hover:bg-zinc-800"
                >
                  Poolside Laguna
                </button>
              </div>
            )}
          </div>
        </div>
        <input id="file" type="file" multiple={false} hidden />
        <input
          type="text"
          name="text"
          placeholder="Ask anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={async (e) => {
            if (input === "") {
              alert("Please write something...");
            } else {
              e.preventDefault();
              setMessages((prev) => [...prev, { sender: "user", text: input }]);
              setHasConversationStarted(true);
              setLoading(true);
              let response = await openRouterAI(input, selectedModel.value);
              setInput("");
              setMessages((prev) => [
                ...prev,
                { sender: "ai", text: response },
              ]);
              setLoading(false);
            }
          }}
        >
          <img src="/arrow.png" alt="" />
        </button>
      </form>
    </>
  );
};

export default NewPrompt;
