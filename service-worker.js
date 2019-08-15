/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4b95ff6322806d4072db22cb00ac2d7e"
  },
  {
    "url": "assets/css/0.styles.f45e872f.css",
    "revision": "0d08ddf63bb9f21642c12addc4f4c5ef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b635c98c.js",
    "revision": "484368cc1f8538ce33bd5b2825f1b0a4"
  },
  {
    "url": "assets/js/11.f5389cb8.js",
    "revision": "6f2c3cfd2bb6a2891961030c97c141c8"
  },
  {
    "url": "assets/js/12.59e11fb5.js",
    "revision": "fcef19ea821784e537571c3639c80c08"
  },
  {
    "url": "assets/js/13.d5b39a3b.js",
    "revision": "aa4384e5aabe7e56b7eaf7301ef01246"
  },
  {
    "url": "assets/js/14.379a7b6f.js",
    "revision": "eda8249fdd8aa0c9ed59d4f03c7a7df0"
  },
  {
    "url": "assets/js/15.30721a43.js",
    "revision": "0681c5903e43fbc429537072037d34a7"
  },
  {
    "url": "assets/js/16.f7c33f85.js",
    "revision": "119e378f767d2dad47fea3be040c45ae"
  },
  {
    "url": "assets/js/17.1621d6f8.js",
    "revision": "17f73096b46c66eba74807e4328775f1"
  },
  {
    "url": "assets/js/18.355b76dc.js",
    "revision": "61ed671afe7e688d644a3c3fec39bf7f"
  },
  {
    "url": "assets/js/19.e54d2efd.js",
    "revision": "d0ce26b91ccc67909ab954a572d96f72"
  },
  {
    "url": "assets/js/2.2a274f30.js",
    "revision": "8c020448baae9acd1c366afd506966dd"
  },
  {
    "url": "assets/js/20.1a5762e2.js",
    "revision": "ad3926bb2856c31fb4a5118a0dbe56c2"
  },
  {
    "url": "assets/js/21.16ee2aaf.js",
    "revision": "9baaa7801229a4f42161e154f1dcd18d"
  },
  {
    "url": "assets/js/22.d755962d.js",
    "revision": "c99c95c865ebaba7596ecad5a9c5f0ed"
  },
  {
    "url": "assets/js/23.4ebd31de.js",
    "revision": "5527cdcf253c5be306a257170e628f12"
  },
  {
    "url": "assets/js/24.9f114fb4.js",
    "revision": "4d2e191793d2f11e163aa0c2c759f901"
  },
  {
    "url": "assets/js/25.f8d1d035.js",
    "revision": "48939d8b9e78c9f7344876ca607a14ef"
  },
  {
    "url": "assets/js/26.be1b030d.js",
    "revision": "7353d2131e7eddc5905790644a914711"
  },
  {
    "url": "assets/js/27.bc26b064.js",
    "revision": "5c83e9b37af187944748bbf7a5a3a7dd"
  },
  {
    "url": "assets/js/28.4e3d37b8.js",
    "revision": "71cc545a79d7dbfa156ec13a92be6544"
  },
  {
    "url": "assets/js/29.8102a27f.js",
    "revision": "bdfde4ef08ba1efe2e0ca26f692580d6"
  },
  {
    "url": "assets/js/3.0b6855f4.js",
    "revision": "6005a10f1a81d256ac1c96f8866a0a5a"
  },
  {
    "url": "assets/js/30.d0f509d8.js",
    "revision": "43c4ce999b8322cf0f785be298e149b9"
  },
  {
    "url": "assets/js/31.ad4777a3.js",
    "revision": "093ad2b6c1a83c2d8c2d92d0ab728437"
  },
  {
    "url": "assets/js/32.aa2e6e0d.js",
    "revision": "1cea976f8cbdac3689e953962324757c"
  },
  {
    "url": "assets/js/33.2bd91d60.js",
    "revision": "ae141187160f2f1f6d232aecde6a476a"
  },
  {
    "url": "assets/js/34.445dcc5f.js",
    "revision": "7cc92e8fe4738989e06586be54ad8803"
  },
  {
    "url": "assets/js/35.da265bd7.js",
    "revision": "bdf7d27848a498e08b6251baeafc24db"
  },
  {
    "url": "assets/js/36.ddc6792a.js",
    "revision": "a8c8221b0c4b5d3fdc0ecf1555358da4"
  },
  {
    "url": "assets/js/37.9a1b9c17.js",
    "revision": "9eb5bd2df356d36fd37d1723b251d4ad"
  },
  {
    "url": "assets/js/38.c0764e27.js",
    "revision": "8f2570065c0f6d5386197ab1f6095422"
  },
  {
    "url": "assets/js/39.25ae9998.js",
    "revision": "2b3efa4695f64bb156a670065251359e"
  },
  {
    "url": "assets/js/4.f7fc35f8.js",
    "revision": "3e147c93f683a033d6006e7e59949cdd"
  },
  {
    "url": "assets/js/40.6bfb0415.js",
    "revision": "283ff2c9556e268352c58fa5689ad509"
  },
  {
    "url": "assets/js/41.f29edd91.js",
    "revision": "afba91222b6a57fb745a4973af49ef52"
  },
  {
    "url": "assets/js/42.6b8e90d0.js",
    "revision": "09060804ef3c9a51b48e8e889a6e5ce7"
  },
  {
    "url": "assets/js/43.c8b5f2aa.js",
    "revision": "9053946a4dcbea7a37ea4a051f788870"
  },
  {
    "url": "assets/js/44.f11c8659.js",
    "revision": "7eac8b651bc6cafe458b6ba5e6650648"
  },
  {
    "url": "assets/js/45.6a62db81.js",
    "revision": "1752bb1db13168e095e4ff1d162597c9"
  },
  {
    "url": "assets/js/46.8821f174.js",
    "revision": "4448e3bc4f81957d23c2e41db4d01f65"
  },
  {
    "url": "assets/js/47.fc817602.js",
    "revision": "45713ef949ad634bdc8cd925aaa0e321"
  },
  {
    "url": "assets/js/48.23c5fdae.js",
    "revision": "17e7c7732a6611058e60b593e003d326"
  },
  {
    "url": "assets/js/49.075b9ebe.js",
    "revision": "023d607e06d9b3331cdfb5e561c6721a"
  },
  {
    "url": "assets/js/5.81bc92c4.js",
    "revision": "a81b964f4278dae1aaf06c13a7c57641"
  },
  {
    "url": "assets/js/50.171ece3d.js",
    "revision": "d1bcff74f8ae44800b02bbfebd8c6d95"
  },
  {
    "url": "assets/js/51.36ff679b.js",
    "revision": "5abb3a350770eb0d446d71c76d1e01e7"
  },
  {
    "url": "assets/js/52.78da2c75.js",
    "revision": "eb9fb9c0c1c87b4082844b7f6b3aa27c"
  },
  {
    "url": "assets/js/53.22d03e2d.js",
    "revision": "407ca9600665b93aa8d1f3b4f0b07d77"
  },
  {
    "url": "assets/js/54.eb82f221.js",
    "revision": "14bb00cb2ff91062b99f4d78c6caecaf"
  },
  {
    "url": "assets/js/55.7455b867.js",
    "revision": "f5e3d3b8dd956009b99919aa7a5cb6b0"
  },
  {
    "url": "assets/js/56.edfa8a73.js",
    "revision": "8b2a5802d79aa275efd91116683af30d"
  },
  {
    "url": "assets/js/57.59d0262d.js",
    "revision": "4bd229059ce925d3ac561f6c847fded5"
  },
  {
    "url": "assets/js/58.ee44192b.js",
    "revision": "62fdcd9dfa58f99e3c08586b561167aa"
  },
  {
    "url": "assets/js/59.34caea1f.js",
    "revision": "d1102bd94d899993c75e750f801ab1a2"
  },
  {
    "url": "assets/js/6.cffe5692.js",
    "revision": "32c4228908feb9cd1d62a0cd1c4db5ca"
  },
  {
    "url": "assets/js/60.4c3395e1.js",
    "revision": "cde876cc6339b177d1f3c9281c9ce735"
  },
  {
    "url": "assets/js/61.0a534de4.js",
    "revision": "37a106805aae7776181ca3cbcf7e2270"
  },
  {
    "url": "assets/js/62.c0c5de54.js",
    "revision": "3c431ba3c7c3a36e6215df01aa1700ee"
  },
  {
    "url": "assets/js/63.01d99200.js",
    "revision": "0c466faf654d7bc4f6606398181705ff"
  },
  {
    "url": "assets/js/64.f59193e7.js",
    "revision": "b84764a39b289bf7289ba3baca981058"
  },
  {
    "url": "assets/js/65.3acd93e6.js",
    "revision": "506a6286d82edf838eab423e74c3d591"
  },
  {
    "url": "assets/js/66.5bedc4da.js",
    "revision": "a3f48b14dc25fb5ee2531f5c0293a636"
  },
  {
    "url": "assets/js/67.95329b50.js",
    "revision": "e3d98a2a0d19c5e55d18838ce2cdeec4"
  },
  {
    "url": "assets/js/68.772c174c.js",
    "revision": "dc13fa866b66872ec8603695060adbe8"
  },
  {
    "url": "assets/js/69.262261c0.js",
    "revision": "33bb3b7103e96e382da28a746a420657"
  },
  {
    "url": "assets/js/7.f87b0991.js",
    "revision": "ff0189ace83b2c2cf1931ece05156961"
  },
  {
    "url": "assets/js/70.ff6d6222.js",
    "revision": "fc9eb8b0b06175d920a50c8889a9655a"
  },
  {
    "url": "assets/js/71.1167de03.js",
    "revision": "1ee4f372c3ede5589c034c60b24c8daf"
  },
  {
    "url": "assets/js/72.581c1da2.js",
    "revision": "8e70bcd44046f651506d6272653073e6"
  },
  {
    "url": "assets/js/73.448c88b0.js",
    "revision": "edb308131ac428916e8d9949e7df63bf"
  },
  {
    "url": "assets/js/74.f2c6daf2.js",
    "revision": "b65f8e2b05a964cc2ec9d7a269527d11"
  },
  {
    "url": "assets/js/75.b23255bc.js",
    "revision": "71ca71c93edf951c6b1747e4ddcb705c"
  },
  {
    "url": "assets/js/76.e86a0924.js",
    "revision": "47ffcb141dbc5753cec1f60b9c63e483"
  },
  {
    "url": "assets/js/77.2421ecf7.js",
    "revision": "80e3676fcf8372baba89df2e6804918b"
  },
  {
    "url": "assets/js/78.1974932d.js",
    "revision": "8231c08b2a24deb5dc144b6522797dc5"
  },
  {
    "url": "assets/js/79.fa7209c2.js",
    "revision": "69630be8cfb6a6d4f961ebf5f5213d2a"
  },
  {
    "url": "assets/js/8.44e2ec24.js",
    "revision": "1642ec963948d2619ac0ce6cb8036b31"
  },
  {
    "url": "assets/js/80.42eacae5.js",
    "revision": "a4b63200d454ab45ab0f1a1a846e48d0"
  },
  {
    "url": "assets/js/81.cf40d4b2.js",
    "revision": "09f11e6976572cb05e1c820bfc1c9fa7"
  },
  {
    "url": "assets/js/82.d1b7dc9f.js",
    "revision": "921b9c36cb5c41b7cff9863cbd4dc4c5"
  },
  {
    "url": "assets/js/83.2cffe812.js",
    "revision": "4a7cc4de32ffccc16bccdc52ea6ee491"
  },
  {
    "url": "assets/js/84.7c88b6a5.js",
    "revision": "fc42d73c8866116a67fa65b5ff4bb95c"
  },
  {
    "url": "assets/js/85.b67e79f2.js",
    "revision": "0e776990766e1159ab3bd171ad1e905e"
  },
  {
    "url": "assets/js/86.b18662d1.js",
    "revision": "ea47882d21f0e366c9c64290a790af50"
  },
  {
    "url": "assets/js/87.adee741f.js",
    "revision": "393f6e405769b16e66db2edd1635ca41"
  },
  {
    "url": "assets/js/9.f326f90c.js",
    "revision": "a2aae02cb232f162943a7524e03bbe05"
  },
  {
    "url": "assets/js/app.c6a1bd30.js",
    "revision": "9d20def4c172d1d9393799774690a936"
  },
  {
    "url": "compiler/ast.html",
    "revision": "78d241b961bed67dae5431e4bc04fc01"
  },
  {
    "url": "compiler/binder.html",
    "revision": "83351ad1fd6b7b127cc3bb8bebfe049d"
  },
  {
    "url": "compiler/checker.html",
    "revision": "5d36d9e4323f51afea3b3b9611dcb90c"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "3e43b61521d1abf42067bae7b18f6ddc"
  },
  {
    "url": "compiler/overview.html",
    "revision": "e34fd1fbfa4ade233878ae65bb454abf"
  },
  {
    "url": "compiler/parser.html",
    "revision": "c17a58d2cbdfe0e362602fcbb49860d4"
  },
  {
    "url": "compiler/program.html",
    "revision": "562345f96d4b86fde37d2db4060bf065"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "35e584807814238d78d510b85c4c5430"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "33e32b0685012734bf10eb5703287143"
  },
  {
    "url": "error/interpreting.html",
    "revision": "83d4f20aa76acda97ba6f1ef08976d02"
  },
  {
    "url": "faqs/class.html",
    "revision": "6ebf879040a481141d59edf79e24de29"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "5674b8b760bcbb731e05a63fa1f25948"
  },
  {
    "url": "faqs/comments.html",
    "revision": "9dfc49f48f28433ef423b4d9d5162733"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "c87b5d6b264f5abd0a016a22ca491c6e"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "9e0d4d79f2d76bfddaa39235378184c5"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "1258d187787ff833451c0058c181089d"
  },
  {
    "url": "faqs/enums.html",
    "revision": "29557422aeaa6a6a6138790e4d855c4e"
  },
  {
    "url": "faqs/function.html",
    "revision": "8d7bfec830f5582454b1b413611d03e5"
  },
  {
    "url": "faqs/generics.html",
    "revision": "21ba774ff230643dd9510edf4b197e82"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "a8a5dc1b729b6b1dcda7d5f615f92fb8"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "17d36fbe20b50b4ba523b89a0cf6e58a"
  },
  {
    "url": "faqs/modules.html",
    "revision": "e91e492e6ffc5751537dffd4b9745ebf"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "1679be1f67583f40f36373964dc81cb8"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "62d5a381375c0faa682d972287a2ca35"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "db576244702d31bd29fa2f732a03df6d"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "1ae492840bf66db9826c48b06b864a3a"
  },
  {
    "url": "ide.png",
    "revision": "0552400adbb2b3fcbed10a98a02e2516"
  },
  {
    "url": "index.html",
    "revision": "6710931f529f10adc33f327ce47139dd"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "f9ed1b5f8a58083d36b067d158d19386"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "22b346f516699a70dbc5b991e3c418f6"
  },
  {
    "url": "jsx/support.html",
    "revision": "b22b638f9541b8486356d10115f92b1b"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "a83e31dff49b3f33ebae48837e4f2b0c"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "b5acd6e81b06de6085a55eb15bc1be2f"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "aefdc8cc6e7fd2f18fe6b83a62a82e6f"
  },
  {
    "url": "project/modules.html",
    "revision": "b12b77d47824df38c0fadc49d5702e72"
  },
  {
    "url": "project/namespaces.html",
    "revision": "9b718220cc96f88146861dfd9c340401"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "9c3233e8548fbefae8f1830c148f0b72"
  },
  {
    "url": "tips/barrel.html",
    "revision": "3c3b67a52ad985b1f25e65e10397b790"
  },
  {
    "url": "tips/bind.html",
    "revision": "ed5272ca07c4dcd8fefe2154e47c0876"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "860b05cd22ab02baef4c45cef3880354"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "1601b57757354335452428fcb26fa902"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "560093795404a98229afb5fb5f82cb8e"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "f385c5d8960201f089e70e907700bd23"
  },
  {
    "url": "tips/curry.html",
    "revision": "c1449f1c24e12c79d23def9268f38895"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "3e552608acea64388a2116ed0740e2fc"
  },
  {
    "url": "tips/infer.html",
    "revision": "fdfa87915c9fd399697bfb3cdb2f93c9"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "ad093c20f005b17a79e84c091e0e23c2"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "75d2bbb54e41eff867c3fbb0820b2fe6"
  },
  {
    "url": "tips/metadata.html",
    "revision": "a83e353e09e37fca00f1255f764b63e1"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "54396185fe1cdfb078c7234708711ab7"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "12d550414749982ce7a27f1a6639fb56"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "c5bad682b72f30ead084178c87d7637b"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "09795b5279373c1fe9e4eea339bdf59b"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "462738cf9326a67521aa24ee746bdaaa"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "0a8f02e0b390f8109c8fd403c5ef110d"
  },
  {
    "url": "tips/truthy.html",
    "revision": "46d713d7f992f7d9565ed817986007e5"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "542ccaa286050fae3083a3cde41824d4"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "d12bc2f46600fb55f1457ded33786e76"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "3980e2c028417f6907eb6dc0d32a1700"
  },
  {
    "url": "typings/callable.html",
    "revision": "3567f1f72eb678a55a2ba158f75f4f64"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "00e4c11a65d497f19ff426cca41dd79d"
  },
  {
    "url": "typings/enums.html",
    "revision": "6d58050949b89de56058b454b9e0ec12"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "f679beb4e029a06495ff285f7b866c7c"
  },
  {
    "url": "typings/freshness.html",
    "revision": "96bf10b8b8577f700ef5eb4ede8d4c3a"
  },
  {
    "url": "typings/functions.html",
    "revision": "ad8ffdea70b173ced255a6dc76fd6f95"
  },
  {
    "url": "typings/generices.html",
    "revision": "bb5fea2f921bde89c415ac9e7c2ce016"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "fc9e11c1543d599bbe43173ebc6f9a25"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "4c07d2d89d793abf0d43291e301e4b37"
  },
  {
    "url": "typings/lib.html",
    "revision": "95eb9b8794a580fffc923f86d4dce17b"
  },
  {
    "url": "typings/literals.html",
    "revision": "5ed0e6529966ae3942daab5b2858c265"
  },
  {
    "url": "typings/migrating.html",
    "revision": "45111956a21f7c35e031cfd9ea5d7069"
  },
  {
    "url": "typings/mixins.html",
    "revision": "eecc2b45a63d63bb08e38d38be149673"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "a44816b681f05131512d15f0327bd5b6"
  },
  {
    "url": "typings/neverType.html",
    "revision": "5177af576fc3fe45293ef2ce3f63e1b2"
  },
  {
    "url": "typings/overview.html",
    "revision": "18477aa3aa6d4c77c4a7ee47bf59d39b"
  },
  {
    "url": "typings/readonly.html",
    "revision": "651f95bca82b81bd0b3f81f511492fae"
  },
  {
    "url": "typings/thisType.html",
    "revision": "36436618c805597d3d506ef6abaad53a"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "8ff03de4f58fc4d6b6caf206b0577d0f"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "66449386156226508ca7aaed06b27cd1"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "fd4029cfd86f1bb205303c48b804c2f1"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "87b0d6b3e795ee3732f5911258a4715d"
  },
  {
    "url": "typings/types.html",
    "revision": "567464bb4ae3958e988561e9e249307c"
  },
  {
    "url": "wechat.jpg",
    "revision": "36c771d59ed899617f1e6c49f9ee812f"
  },
  {
    "url": "zhifubao.jpg",
    "revision": "2a94b23f0d0d6d55befc332742849b67"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
