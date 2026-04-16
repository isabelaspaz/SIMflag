import * as Cellular from "expo-cellular";

function isoToFlagEmoji(isoCode) {
  if (!isoCode || isoCode.length !== 2) return "🏳️";

  return isoCode
    .toUpperCase()
    .split("")
    .map((char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
    .join("");
}

const COUNTRY_NAMES = {
  BR: "Brasil",
  US: "Estados Unidos",
  AR: "Argentina",
  CL: "Chile",
  UY: "Uruguai",
  PY: "Paraguai",
  BO: "Bolívia",
  PE: "Peru",
  CO: "Colômbia",
  VE: "Venezuela",
  MX: "México",
  CA: "Canadá",
  FR: "França",
  DE: "Alemanha",
  IT: "Itália",
  ES: "Espanha",
  PT: "Portugal",
  GB: "Reino Unido",
  JP: "Japão",
  CN: "China",
  KR: "Coreia do Sul",
  IN: "Índia",
};

export async function getCountryFromCellular() {
  try {
    const isoCode = await Cellular.getIsoCountryCodeAsync();

    if (!isoCode) {
      return {
        success: false,
        isoCode: "BR",
        countryName: "Brasil",
        flag: "🇧🇷",
        message: "País não identificado pela rede celular. Fallback aplicado.",
      };
    }

    const upperIso = isoCode.toUpperCase();

    return {
      success: true,
      isoCode: upperIso,
      countryName: COUNTRY_NAMES[upperIso] || upperIso,
      flag: isoToFlagEmoji(upperIso),
      message: "País identificado com sucesso.",
    };
  } catch (error) {
    return {
      success: false,
      isoCode: "BR",
      countryName: "Brasil",
      flag: "🇧🇷",
      message: "Erro ao obter país da conexão. Fallback aplicado.",
      error: error.message,
    };
  }
}
