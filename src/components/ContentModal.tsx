import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ReactNode } from "react";

interface ContentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  date: string;
  children: ReactNode;
}

const ContentModal = ({ open, onOpenChange, title, date, children }: ContentModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <DialogDescription className="text-muted-foreground">{date}</DialogDescription>
        </DialogHeader>
        <div className="prose prose-invert prose-sm max-w-none mt-4">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContentModal;
