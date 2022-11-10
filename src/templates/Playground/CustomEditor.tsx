import Editor, { useMonaco } from "@monaco-editor/react";
import { MutableRefObject, useEffect, useRef } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";

const { theme: tailwindVariables } = resolveConfig(tailwindConfig);

type CustomEditor = {
  editorRef: MutableRefObject<any>;
  editorConfig: {
    defaultValue: string;
    language: string;
  };
};

const CustomEditor = ({ editorConfig, editorRef }: CustomEditor) => {
  const monaco = useMonaco();

  useEffect(() => {
    if (!monaco) {
      return;
    }

    monaco.editor.defineTheme("code-clash", {
      base: "vs-dark",
      inherit: true,
      rules: [{}],
      colors: {
        "editor.foreground": "#ffffff",
        "editor.background": tailwindVariables.colors["primary"],
        "editor.lineHighlightBackground": tailwindVariables.colors["quaternary"]
      }
    });

    monaco.editor.setTheme("code-clash");
  }, [monaco]);

  return (
    <div className="h-full py-4 outline outline-2 outline-quaternary">
      <Editor
        {...editorConfig}
        options={{
          minimap: {
            enabled: false
          },
          fontFamily: "JetBrains Mono",
          fontSize: 14,
          smoothScrolling: true
        }}
        onMount={editor => (editorRef.current = editor)}
      />
    </div>
  );
};

export default CustomEditor;
