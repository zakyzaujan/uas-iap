import React from "react";
import { cn } from "@/assets/lib/utils";
import { Button } from "./ui/button";
import { Grid2X2, List } from "lucide-react";

function ViewToggle({ viewMode, setViewMode }) {
  return (
    <div className="flex justify-end mb-4 space-x-2">
      <Button
        onClick={() => setViewMode("grid")}
        variant="ghost"
        size="sm"
        className={cn(
          "bg-white/80 hover:bg-primary hover:text-secondary backdrop-blur-sm text-muted-foreground shadow-sm transition-colors cursor-pointer",
          viewMode === "grid" && "text-secondary bg-primary"
        )}
      >
        {viewMode === "grid" ? (
          <div className="flex items-center gap-2">
            <Grid2X2 className="w-5 h-5" />
            <span>Grid</span>
          </div>
        ) : (
          <Grid2X2 className="w-5 h-5" />
        )}
      </Button>

      <Button
        onClick={() => setViewMode("list")}
        variant="ghost"
        size="sm"
        className={cn(
          "bg-white/80 hover:bg-primary hover:text-secondary backdrop-blur-sm text-muted-foreground shadow-sm transition-colors cursor-pointer",
          viewMode === "list" && "text-secondary bg-primary"
        )}
      >
        {viewMode === "list" ? (
          <div className="flex items-center gap-2">
            <List className="w-5 h-5" />
            <span>List</span>
          </div>
        ) : (
          <List className="w-5 h-5" />
        )}
      </Button>
    </div>
  );
}

export { ViewToggle };
