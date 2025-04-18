"use client";

import { Textarea as UITextarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface InputProps {
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  input: string;
  isLoading: boolean;
  status: string;
  stop: () => void;
}

export function Textarea({
  handleInputChange,
  input,
  isLoading,
  status,
  stop,
}: InputProps) {
  return (
    <div className="flex w-full gap-2">
      <UITextarea
        value={input}
        onChange={handleInputChange}
        placeholder="Say something..."
        className="flex-1 rounded-md border-[#A0A0A0] bg-[#303030] text-[#F7F7F7]"
        disabled={isLoading}
      />
      {isLoading ? (
        <Button
          onClick={stop}
          className="bg-[#A0A0A0] text-[#303030] hover:bg-[#E0E0E0]"
        >
          Stop
        </Button>
      ) : (
        <Button
          type="submit"
          className="bg-[#A0A0A0] text-[#303030] hover:bg-[#E0E0E0]"
        >
          Send
        </Button>
      )}
    </div>
  );
}
