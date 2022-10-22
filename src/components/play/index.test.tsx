import {render, screen} from "@testing-library/react";
import PlayAndPauseButton from "./";

test("If button is in mode play", () => {
    render(<PlayAndPauseButton playing={false} setPlaying={() => {}} />);
    const iconButton = screen.getByRole("play");
    expect(iconButton).toBeInTheDocument();
})