module.exports = async (client) => {
  (client.Ready = true),
    client.user.setPresence({
      status: client.botconfig.Presence.status, // You can show online, idle, and dnd
      activity: {
        name: client.botconfig.Presence.name,
        type: client.botconfig.Presence.type,
      },
    });
  client.Manager.init(client.user.id);
  client.log("Connexion réussie en tant que " + client.user.tag); // You can change the text if you want, but DO NOT REMOVE "client.user.tag"
  client.RegisterSlashCommands();
};
