class CalculatorController {
    add(req, res) {
        const { num1, num2 } = req.body;
        const result = num1 + num2;
        res.json({ result });
    }

    subtract(req, res) {
        const { num1, num2 } = req.body;
        const result = num1 - num2;
        res.json({ result });
    }

    multiply(req, res) {
        const { num1, num2 } = req.body;
        const result = num1 * num2;
        res.json({ result });
    }

    divide(req, res) {
        const { num1, num2 } = req.body;
        if (num2 === 0) {
            return res.status(400).json({ error: 'Cannot divide by zero' });
        }
        const result = num1 / num2;
        res.json({ result });
    }
}

module.exports = new CalculatorController();