describe("A variable", function () {
    it("can be tests truthy or falsy in statement if it's null", function () {
        expect(!!null).toEqual(false);
    });

    it("Array is always truthy if it's exists", function () {
        expect(!![]).toEqual(true);
    });

    it("Object is always truthy if it's exists", function () {
        expect(!!{}).toEqual(true);
    });

    it("can be tests truthy or falsy in statement if it's field in an object which may not exist", function () {
        var data = {};
        expect(!!{}.someFieldWhichNotExists).toEqual(false);
    });

    it("String is always truthy except if it's an Empty String", function () {
        expect(!!"").toEqual(false);
        expect(!!" ").toEqual(true);
    });


    it("Number is always truthy except if it's an NaN or a 0", function () {
        expect(!!1).toEqual(true);
        expect(!!-1).toEqual(true);
        expect(!!0).toEqual(false);
        expect(!!Number("cannotConvertedToNumber")).toEqual(false);
    });

    it("Never passed param is always undefined", function () {
        (function (undefinedParam) {
            expect(!!undefinedParam).toEqual(false);
        })();
    });

});