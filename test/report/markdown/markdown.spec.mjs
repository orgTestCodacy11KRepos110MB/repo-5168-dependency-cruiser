import { expect } from "chai";
import markdown from "../../../src/report/markdown.js";
import everythingFineResult from "./__mocks__/everything-fine.mjs";
import validationMoreThanOnce from "./__mocks__/violation-more-than-once.mjs";
import validationMoreThanOnceWithAnIgnore from "./__mocks__/violation-more-than-once-with-an-ignore.mjs";

describe("[I] report/markdown", () => {
  const lOkeliDokelyKey = "gummy bears";
  const lOkeliDokelyHeader = "No violations found";
  const lDefaultTitle = "## Forbidden dependency check - results";
  const lDefaultSummaryHeader = "### :chart_with_upwards_trend: Summary";

  it("happy day no errors", () => {
    const lResult = markdown(everythingFineResult);

    expect(lResult.output).to.contain(lDefaultTitle);
    expect(lResult.output).to.contain(lDefaultSummaryHeader);
    expect(lResult.output).to.contain(lOkeliDokelyKey);
    expect(lResult.output).to.contain(lOkeliDokelyHeader);
    expect(lResult.exitCode).to.equal(0);
  });

  it("happy day no errors - custom options", () => {
    const lCustomSummaryHeader = "Aap noot mies";
    const lResult = markdown(everythingFineResult, {
      showTitle: false,
      summaryHeader: lCustomSummaryHeader,
    });

    expect(lResult.output).to.not.contain(lDefaultTitle);
    expect(lResult.output).to.not.contain(lDefaultSummaryHeader);
    expect(lResult.output).to.contain(lCustomSummaryHeader);
    expect(lResult.output).to.contain(lOkeliDokelyKey);
    expect(lResult.output).to.contain(lOkeliDokelyHeader);
    expect(lResult.exitCode).to.equal(0);
  });

  it("report with errors", () => {
    const lReport = markdown(validationMoreThanOnce);

    expect(lReport.output).to.not.contain(lOkeliDokelyKey);
    expect(lReport.output).to.not.contain(lOkeliDokelyHeader);
    expect(lReport.output).to.contain("<details>");
    expect(lReport.output).to.contain("All violations");
    expect(lReport.output).to.contain("**127** modules");
    expect(lReport.output).to.contain("**259** dependencies");
    expect(lReport.output).to.contain("**0** errors");
    expect(lReport.output).to.contain("**1** warnings");
    expect(lReport.output).to.contain("**2** informational");

    expect(lReport.exitCode).to.equal(0);
  });

  it("report with errors - custom options", () => {
    const lReport = markdown(validationMoreThanOnce, {
      collapseDetails: false,
    });

    expect(lReport.output).to.not.contain(lOkeliDokelyKey);
    expect(lReport.output).to.not.contain(lOkeliDokelyHeader);
    expect(lReport.output).to.not.contain("<details>");
    expect(lReport.output).to.contain("All violations");
    expect(lReport.output).to.contain("**127** modules");
    expect(lReport.output).to.contain("**259** dependencies");
    expect(lReport.output).to.contain("**0** errors");
    expect(lReport.output).to.contain("**1** warnings");
    expect(lReport.output).to.contain("**2** informational");

    expect(lReport.exitCode).to.equal(0);
  });

  it("report with violations and ignored violations", () => {
    const lReport = markdown(validationMoreThanOnceWithAnIgnore);

    expect(lReport.output).to.not.contain(lOkeliDokelyKey);
    expect(lReport.output).to.not.contain(lOkeliDokelyHeader);
    expect(lReport.output).to.contain("All violations");
    expect(lReport.output).to.contain("**127** modules");
    expect(lReport.output).to.contain("**259** dependencies");
    expect(lReport.output).to.contain("**0** errors");
    expect(lReport.output).to.contain("**0** warnings");
    expect(lReport.output).to.contain("**1** informational");
    expect(lReport.output).to.contain("**2** ignored");

    expect(lReport.exitCode).to.equal(0);
  });
});