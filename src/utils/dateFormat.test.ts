import { dateFormatter } from "./dateFormat";

describe("dateFormatter", () => {
  it("should format Date object correctly", () => {
    const date = new Date("2023-05-16T00:00:00.000Z");
    const formatted = dateFormatter(date, "yyyy-MM-dd");
    expect(formatted).toBe("2023-05-16");
  });

  it("should format timestamp (number) correctly", () => {
    const timestamp = new Date("2023-05-16T00:00:00.000Z").getTime();
    const formatted = dateFormatter(timestamp, "yyyy-MM-dd");
    expect(formatted).toBe("2023-05-16");
  });
});
