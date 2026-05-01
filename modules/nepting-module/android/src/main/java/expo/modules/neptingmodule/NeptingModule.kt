package expo.modules.neptingmodule

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.net.URL
import android.content.Intent

class NeptingModule : Module() {
  private val REQUEST_CODE = 8888

  override fun definition() = ModuleDefinition {
    Name("NeptingModule")

    // 🔐 LOGIN
    AsyncFunction("login") { merchantCode: String ->
      val activity = appContext.currentActivity
        ?: throw Exception("Activity not found")

      val intent = Intent("com.nepting.android.mobile.payment.REQUEST")
      intent.putExtra("MESSAGE_NAME", "PosRequest")
      intent.putExtra("MESSAGE_TYPE", "Login")
      intent.putExtra("MERCHANT_CODE", merchantCode)
      intent.putExtra("POS_NUMBER", "1")
      intent.putExtra("POS_ALIAS", "TMD_POS")
      intent.putExtra("CASHIER_ID", "ADMIN")
      intent.putExtra("TERMINAL_TYPE", "22")

      if (intent.resolveActivity(activity.packageManager) != null) {
        activity.startActivity(intent)
        "LOGIN_OPENED"
      } else {
        throw Exception("Nepting app not installed")
      }
    }

    // 💳 PAYMENT
    AsyncFunction("startPayment") { amount: String, orderId: String ->
    val activity = appContext.currentActivity ?: throw Exception("Activity not found")
    val intent = Intent("com.nepting.android.mobile.payment.REQUEST").apply {
        putExtra("MESSAGE_NAME", "PosRequest")
        putExtra("MESSAGE_TYPE", "Debit")
        // ... rest of your extras
    }

    try {
        activity.startActivity(intent)
        "PAYMENT_OPENED"
    } catch (e: Exception) {
        // This triggers if the app is truly missing or the intent action is wrong
        throw Exception("Could not open Nepting app. Is it installed?")
    }
}


    // 🚀 OPTIONAL: Just open app
    AsyncFunction("openApp") {
      val activity = appContext.currentActivity
        ?: throw Exception("Activity not found")

      val intent = activity.packageManager.getLaunchIntentForPackage("com.nepting.android.mobile.payment")
      if (intent != null) {
        activity.startActivity(intent)
        "APP_OPENED"
      } else {
        throw Exception("Nepting app not installed")
      }
    }

    // --- THESE WERE OUTSIDE THE BLOCK ---
    
    Constant("PI") {
      Math.PI
    }

    Events("onChange", "onLoad")

    Function("hello") {
      "Hello world! 👋"
    }

    AsyncFunction("setValueAsync") { value: String ->
      sendEvent("onChange", mapOf(
        "value" to value
      ))
    }

    View(NeptingModuleView::class) {
      Prop("url") { view: NeptingModuleView, url: URL ->
        view.webView.loadUrl(url.toString())
      }
    }
  } // This closes ModuleDefinition
} // This closes the Class
