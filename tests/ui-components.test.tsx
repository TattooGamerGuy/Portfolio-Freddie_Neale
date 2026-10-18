import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { ProfileCard } from "@/components/profile/ProfileCard";
import { OrgMark } from "@/components/profile/OrgMark";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

describe("shadcn UI smoke", () => {
  it("renders Badge variants", () => {
    render(
      <>
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
      </>,
    );
    expect(screen.getByText("Default")).toBeInTheDocument();
    expect(screen.getByText("Secondary")).toBeInTheDocument();
    expect(screen.getByText("Outline")).toBeInTheDocument();
  });

  it("fires Button clicks", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Button type="button" onClick={onClick}>
        Contact
      </Button>,
    );
    await user.click(screen.getByRole("button", { name: "Contact" }));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("renders Input with accessible label via aria", () => {
    render(<Input aria-label="Message" placeholder="Ask…" />);
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
  });

  it("ProfileCard exposes section title and body", () => {
    render(
      <ProfileCard id="about" title="About">
        <p>Profile summary copy.</p>
      </ProfileCard>,
    );
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Profile summary copy.")).toBeInTheDocument();
    expect(document.getElementById("about")).not.toBeNull();
  });

  it("OrgMark shows initials", () => {
    const { container } = render(<OrgMark label="Nunn Corporation" />);
    expect(container.textContent).toMatch(/NC/);
  });
});
