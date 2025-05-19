// src/i18n.ts
import * as Localization from "expo-localization";
import { I18n } from "i18n-js";
import en from "./locales/en"; // o .json
import it from "./locales/it"; // o .json

// 1) Crea un'istanza
const i18n = new I18n();

// 2) Carica le traduzioni
i18n.store({ en, it }); // carica entrambe le lingue :contentReference[oaicite:1]{index=1}

// 3) Configura default e comportamento
i18n.defaultLocale = "en"; // lingua di fallback
i18n.locale = Localization.getLocales()[0]?.languageTag || "en"; // rileva lingua del device
i18n.enableFallback = true; // cerca in defaultLocale se manca la chiave :contentReference[oaicite:2]{index=2}

export default i18n;
