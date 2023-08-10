import Helmet from 'react-helmet';

const appPackage = 'com.haqq.wallet'
const appName = 'haqq'
const appPath = 'user?screen_name=appwrite'
const fallbackAndroid = 'https://play.google.com/store/apps/details?id=com.haqq.wallet?mt=123'
const fallbackIOS = 'https://apps.apple.com/app/id6443843352?mt=123'
export default function DL() {
    return (
        <div>
            <Helmet>
                <script type="text/javascript">
                    {`
      function navigateFallbackIOS() {
        setTimeout(() => {
          window.location.href = '${fallbackIOS}';
        }, 500);
      }
      
      function navigateFallbackAndroid() {
        setTimeout(() => {
          window.location.href = '${fallbackAndroid}';
        }, 500);
      }

      window.addEventListener("DOMContentLoaded", function () {
        const manualAnchor = document.querySelector("#manual");

        if (/Android/i.test(window.navigator.userAgent)) {
          let intentURL = 'intent://${appPath}#Intent;scheme=${appName};package=${appPackage};action=android.intent.action.VIEW;category=android.intent.category.DEFAULT;category=android.intent.category.BROWSABLE;';

          if (fallback) {
            intentURL += 'S.browser_fallback_url=${encodeURIComponent(fallbackAndroid)}';
          }

          intentURL += ";end";

          manualAnchor.setAttribute("href", intentURL);
          manualAnchor.textContent = intentURL;

          window.location.href = intentURL;
          navigateFallback();

          return;
        }

        if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
          const deepLink = '${appName}://${appPath}';

          manualAnchor.setAttribute("href", deepLink);
          manualAnchor.textContent = deepLink;

          window.location.href = deepLink;
          navigateFallback();

          return;
        }

        return;
        window.location.href = fallback;
      });

                    
                    `}
                </script>
            </Helmet>
        </div>
    )
}
