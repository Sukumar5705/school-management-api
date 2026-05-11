    const express = require("express");
    const { body } = require("express-validator");
    const { addSchool, listSchools } = require("../controllers/schoolController");

    const router = express.Router();

    router.post(
    "/addSchool",
    [
        body("name")
        .trim()
        .notEmpty().withMessage("Name is required")
        .isLength({ max: 255 }).withMessage("Name max 255 chars"),

        body("address")
        .trim()
        .notEmpty().withMessage("Address is required")
        .isLength({ max: 255 }).withMessage("Address max 255 chars"),

        body("latitude")
        .notEmpty().withMessage("Latitude is required")
        .isFloat({ min: -90, max: 90 }).withMessage("Latitude must be between -90 and 90"),

        body("longitude")
        .notEmpty().withMessage("Longitude is required")
        .isFloat({ min: -180, max: 180 }).withMessage("Longitude must be between -180 and 180"),
    ],
    addSchool
    );

    router.get("/listSchools", listSchools);

    module.exports = router;
