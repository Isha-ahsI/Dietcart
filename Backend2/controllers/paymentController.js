import Payment from "../models/paymentModel.js";
import Order from "../models/orderModel.js";

// ✅ Record Payment
const recordPayment = async (req, res) => {
  try {
    const { orderId, amount, method, transactionId } = req.body;

    // Validate input
    if (!orderId || !amount || !method) {
      return res.json({ success: false, message: "All fields are required." });
    }

    // Check if the order exists
    const order = await Order.findById(orderId);
    if (!order) {
      return res.json({ success: false, message: "Order not found." });
    }

    // Create a payment record
    const payment = new Payment({
      orderId,
      amount,
      method,
      transactionId: method === "Cash" ? "" : transactionId, // No transaction ID for Cash
      status: "Paid",
    });

    await payment.save();

    // Update order status to "Paid"
    await Order.findByIdAndUpdate(orderId, { status: "Paid" });

    res.json({ success: true, message: "Payment recorded successfully." });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error recording payment." });
  }
};

// ✅ Get All Payments
const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find().populate("orderId");
    res.json(payments);
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error fetching payments." });
  }
};

export { recordPayment, getAllPayments };
