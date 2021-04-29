const reBold = /\*\*(.*)\*\*/gm;

export const formatDiscoHook = string => {
    let newString = string.replaceAll('\n', '<br>');
    newString = newString.replace(/\*{1,2}(.*?)\*{1,2}/g, '<strong>$1</strong>').replace(/`(.*?)`/g, '<code>$1</code>');
    newString = newString.replace('<#722516693397536808>', '<a href="https://discord.gg/BMnMUD3Fj3" target="_blank">#support</a>')
    return newString;
};