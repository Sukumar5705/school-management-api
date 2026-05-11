    const db = require("../config/db");
    const { validationResult } = require("express-validator");
    const calculateDistance = require("../utils/distance");

    exports.addSchool = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(422).json({ success: false, errors: errors.array() });
        }

        const { name, address, latitude, longitude } = req.body;

        const [result] = await db.execute(
        "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)",
        [name.trim(), address.trim(), latitude, longitude]
        );

        res.status(201).json({
        success: true,
        message: "School added successfully",
        id: result.insertId,
        });
    } catch (err) {
        next(err);
    }
    };

    exports.listSchools = async (req, res, next) => {
    try {
        const { latitude, longitude } = req.query;

        if (latitude === undefined || longitude === undefined) {
        return res.status(400).json({
            success: false,
            message: "Query params 'latitude' and 'longitude' are required",
        });
        }

        const userLat = parseFloat(latitude);
        const userLon = parseFloat(longitude);

        if (isNaN(userLat) || isNaN(userLon) ||
            userLat < -90 || userLat > 90 ||
            userLon < -180 || userLon > 180) {
        return res.status(400).json({
            success: false,
            message: "Invalid latitude or longitude values",
        });
        }

        const [schools] = await db.execute(
        "SELECT id, name, address, latitude, longitude FROM schools"
        );

        if (!schools.length) {
        return res.status(200).json({ success: true, data: [] });
        }

        // Compute distances and sort — O(n log n)
        const result = schools
        .map((school) => ({
            ...school,
            distance_km: parseFloat(
            calculateDistance(userLat, userLon, school.latitude, school.longitude).toFixed(2)
            ),
        }))
        .sort((a, b) => a.distance_km - b.distance_km);

        res.status(200).json({ success: true, count: result.length, data: result });
    } catch (err) {
        next(err);
    }
    };
