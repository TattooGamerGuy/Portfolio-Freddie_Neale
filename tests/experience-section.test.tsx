import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { experience } from "@/content/experience";

describe("ExperienceSection", () => {
  it("renders every experience role from content", () => {
    render(<ExperienceSection />);
    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(document.getElementById("experience")).not.toBeNull();
    for (const entry of experience) {
      expect(screen.getByText(entry.title)).toBeInTheDocument();
      expect(screen.getByText(entry.organization)).toBeInTheDocument();
    }
  });
});
