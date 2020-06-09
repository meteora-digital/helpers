function objectAssign(defaultSettings, userSettings) {
  for (key in defaultSettings) {
    if (userSettings[key] !== undefined) {
      defaultSettings[key] = userSettings[key];
    }
  }

  return defaultSettings;
}

module.exports = objectAssign;