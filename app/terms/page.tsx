import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default function Terms() {
  return (
    <div className="w-full flex justify-center p-10">
      <div className="w-full max-w-screen-md space-y-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-500 hover:text-gray-700 underline"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Chatbot
        </Link>
        <h1 className="text-3xl font-bold">AI Chatbot</h1>
        <h2 className="text-2xl font-semibold">
          Terms of Use and Disclaimer for AI Chatbot
        </h2>
        <ol className="list-decimal list-inside space-y-4">
          <li className="text-gray-700">
            <span className="font-semibold">Acceptance of Terms:</span> By
            accessing and using the AI chatbot ("Renee") provided by Aastha
            ("Provider"), you acknowledge that you have read, understood, and
            agreed to be bound by these Terms of Use. If you do not agree with
            these terms, do not use the Chatbot.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">No Warranties:</span> Renee is
            provided "as is" and "as available" without any warranties, express
            or implied. Aastha makes no representations or warranties regarding
            the accuracy, reliability, completeness, or suitability of the
            Chatbot for any purpose related to Microsoft PowerPoint. To the fullest 
            extent permitted by law, all warranties, including but not limited to 
            implied warranties of merchantability, fitness for a particular purpose, and
            non-infringement, are expressly disclaimed.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">
              No Guarantees on Availability or Support:
            </span>{" "}
            Aastha does not guarantee that Renee will be available at all
            times, be uninterrupted, secure, or error-free. No technical
            support, maintenance, or updates are guaranteed or required to be
            provided.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Limitation of Liability:</span> To
            the fullest extent permitted by applicable law, Aastha shall not be
            liable for any direct, indirect, incidental, consequential, special,
            exemplary, or punitive damages arising from or related to your use
            of or inability to use the Chatbot. This includes but is not limited
            to loss of profits, data, business, or any other losses, even if
            Aastha has been advised of the possibility of such damages.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">
              No Legal, Financial, or Professional Advice:
            </span>{" "}
            The Chatbot is intended for informational and general purposes only, 
            specifically catered to Microsoft PowerPoint (Windows, macOS, and web versions).
            It does not constitute legal, financial, medical, or professional
            advice. Any reliance on the information provided by the Chatbot is
            at your own risk.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">User Responsibility:</span> You are
            solely responsible for your use of the Chatbot and any actions or
            decisions made based on its output. Aastha is not responsible for any
            consequences resulting from the use or misuse of the Chatbot.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Data Security and Privacy:</span>{" "}
            You acknowledge that any data transmitted to or through the Chatbot
            is not secured and may be processed by third parties. Do not upload,
            share, or transmit any sensitive, confidential, or personal
            information. All conversations conducted through the Chatbot are
            considered equivalent to public postings, and Aastha does not
            guarantee the confidentiality or security of any data shared.
          </li>
          <li className="text-gray-700">
           <span className="font-semibold">Disclaimer Regarding PowerPoint Versions and Platforms:</span>{" "}
            This Chatbot is based on the newest available version of Microsoft PowerPoint for Windows 
            and Office 365 subscribers. Information provided by the Chatbot is limited to Windows, macOS, 
            and web versions of Microsoft PowerPoint and excludes instructions for Office for Android and 
            Office for iOS. Inserting and playing online videos requires: PowerPoint version 16.15.18070902 
            or later, macOS 10.13.4 (High Sierra) or later, and a Mac manufactured in 2012 or later. Your 
            use of online videos is subject to each provider web site's Terms of Use and Privacy Policy.
            Supported audio formats in PowerPoint for the web include MP3, WAV, M4A, AAC, and OGA. 
            The maximum size for the audio file is 16 MB.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Indemnification:</span> You agree to
            indemnify, defend, and hold harmless Aastha from any claims,
            liabilities, damages, losses, and expenses, including reasonable
            legal fees, arising from your use of the Chatbot or violation of
            these Terms of Use.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Modifications to Terms:</span> Aastha
            reserves the right to modify these Terms of Use at any time without
            prior notice. Continued use of the Chatbot constitutes acceptance of
            the modified terms.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Governing Law:</span> These Terms of
            Use shall be governed by and construed in accordance with the laws
            of the applicable jurisdiction without regard to its conflict of law
            provisions.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Contact Information:</span> If you
            have any questions or concerns regarding these Terms of Use, please
            contact Aastha at apmodi@business.unc.edu.
          </li>
        </ol>
      </div>
    </div>
  );
}
