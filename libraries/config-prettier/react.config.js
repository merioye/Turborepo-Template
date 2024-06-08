module.exports = {
  ...require('./base.config.js'),
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '^(react-dom/(.*)$)|^(react-dom$)',
    '^(react-router-dom/(.*)$)|^(react-router-dom$)',
    '^vitest',
    '^@testing-library/(.*)$',
    '^cypress',
    '<THIRD_PARTY_MODULES>',
    '^types$',
    '^@/types/(.*)$',
    '^@/interfaces$',
    '^interfaces$',
    '^@/config/(.*)$',
    '^config$',
    '^@/lib/(.*)$',
    '^lib$',
    '^@/guards/(.*)$',
    '^guards$',
    '^@/hooks/(.*)$',
    '^hooks$',
    '^@/store/(.*)$',
    '^store$',
    '^@/stores/(.*)$',
    '^stores$',
    '^@/redux/(.*)$',
    '^redux$',
    '^@/context/(.*)$',
    '^context$',
    '^@/contexts/(.*)$',
    '^contexts$',
    '^@/http/(.*)$',
    '^http$',
    '^@/api/(.*)$',
    '^api$',
    '^@/actions/(.*)$',
    '^actions$',
    '^@/routes/(.*)$',
    '^routes$',
    '^@/layouts/(.*)$',
    '^layouts$',
    '^@/pages/(.*)$',
    '^@/app/(.*)$',
    '^app$',
    '^pages$',
    '^@/sections/(.*)$',
    '^sections$',
    '^@/hocs/(.*)$',
    '^hocs$',
    '^@/components/ui/(.*)$',
    '^components/ui$',
    '^@/components/(.*)$',
    '^components$',
    '^@/utils/(.*)$',
    '^utils$',
    '^@/helpers/(.*)$',
    '^helpers$',
    '^@/(theme|themes)/(.*)$',
    '^(theme|themes)$',
    '^@/mocks/(.*)$',
    '^mocks$',
    '^@/__mocks__/(.*)$',
    '^__mocks__$',
    '^@/(locale|locales|translation|translations|i18n)/(.*)$',
    '^(locale|locales|translation|translations|i18n)$',
    '^@/(constants|data|assets)/(.*)$',
    '^(constants|data|assets)$',
    '^@/styles/(.*)$',
    '^styles$',
    '^[./]',
  ],
};
