// src/i18n/index.ts
import { I18n } from "i18n-js";
import { getLocales } from "expo-localization";

import enCommon from "./en/common.json";
import enLogin from "./en/login.json";
import itCommon from "./it/common.json";
import itLogin from "./it/login.json";

const i18n = new I18n({
  en: { common: enCommon, login: enLogin },
  it: { common: itCommon, login: itLogin },
});

i18n.defaultLocale = "en";
i18n.locale = getLocales()[0]?.languageTag || "en";
i18n.enableFallback = true;

export default i18n;
