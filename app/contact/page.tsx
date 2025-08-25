import { Instagram, Mail, Twitter } from "lucide-react";
import AnimatedDiv from "../_components/AnimatedDiv";

export default function Contact() {
  return (
    <AnimatedDiv id="contact" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Get in Touch
        </h2>

        <div className="bg-gray-50 rounded-lg p-6 sm:p-8 space-y-4">
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            I&apos;m always interested in hearing about new opportunities and
            interesting projects. Feel free to reach out if you&apos;d like to
            collaborate!
          </p>

          {/* Stack cards vertically */}
          <div className="flex flex-col gap-4">
            <a
              href="mailto:david@example.com"
              className="flex items-center gap-3 p-4 bg-white rounded-lg border hover:shadow-md transition-shadow"
            >
              <Mail size={20} className="text-black shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">Email</div>
                <div className="text-gray-600 text-sm break-all">
                  talk2adeoluwa2310@gmail.com
                </div>
              </div>
            </a>

            <a
              href="https://twitter.com/meeedzy"
              className="flex items-center gap-3 p-4 bg-white rounded-lg border hover:shadow-md transition-shadow"
            >
              <Twitter size={20} className="text-black shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">Twitter</div>
                <div className="text-gray-600 text-sm">@meeedzy</div>
              </div>
            </a>
            <a
              href="https://instagram.com/thismidey"
              className="flex items-center gap-3 p-4 bg-white rounded-lg border hover:shadow-md transition-shadow"
            >
              <Instagram size={20} className="text-black shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">Instagram</div>
                <div className="text-gray-600 text-sm">@thismidey</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </AnimatedDiv>
  );
}
