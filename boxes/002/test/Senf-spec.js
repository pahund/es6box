/**
 * Senf-spec.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 18 Apr 2015
 */

import Senf from "../js/Senf";

/* global describe, beforeEach, it, expect, spyOn */
describe("Senf", () => {
    it("should say hello", () => {
        let senf = new Senf();
        expect(senf.hello()).toBe("Hello!");
    });
    it("should log hello", () => {
        spyOn(console, "log");
        let senf = new Senf();
        senf.hello();
        expect(console.log).toHaveBeenCalledWith("Hello!");
    });
});

