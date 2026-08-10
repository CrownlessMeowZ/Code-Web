import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const skinsPath = path.join(root, 'src/data/skins.js');
let s = fs.readFileSync(skinsPath, 'utf8');

const producerMap = {
  "producer: 'SEGA / Crypton Future Media'": "producerKey: 'producer_sega_crypton'",
  "producer: 'Kurousa-P'": "producerKey: 'producer_kurousa'",
  "producer: 'TWINDRILL / SEGA'": "producerKey: 'producer_twindrill_sega'",
};

const songMap = {
  "song: 'The Intense Voice of Hatsune Miku'": "songKey: 'song_intense_voice'",
  "song: 'Senbonzakura'": "songKey: 'song_senbonzakura'",
  "song: '—'": "songKey: 'song_none'",
  "song: 'Colorful × Melody'": "songKey: 'song_colorful_melody'",
  "song: 'SING&SMILE'": "songKey: 'song_sing_and_smile'",
  "song: 'Butterfly on Your Right Shoulder'": "songKey: 'song_butterfly_right_shoulder'",
  "song: 'To the End of Infinity'": "songKey: 'song_to_end_of_infinity'",
  "song: 'Erase or Zero'": "songKey: 'song_erase_or_zero'",
  "song: 'Magnet'": "songKey: 'song_magnet'",
  "song: 'Just Be Friends'": "songKey: 'song_just_be_friends'",
  "song: 'Luka Luka★Night Fever'": "songKey: 'song_luka_night_fever'",
  "song: 'Snowman'": "songKey: 'song_snowman'",
  "song: 'Cantarella'": "songKey: 'song_cantarella'",
  "song: 'Nostalogic'": "songKey: 'song_nostalogic'",
  "song: 'Change Me'": "songKey: 'song_change_me'",
};

for (const [a, b] of Object.entries(producerMap)) {
  if (!s.includes(a)) console.warn('missing producer pattern:', a);
  s = s.split(a).join(b);
}
for (const [a, b] of Object.entries(songMap)) {
  if (!s.includes(a)) console.warn('missing song pattern:', a);
  s = s.split(a).join(b);
}

const leftovers = s.match(/\bproducer:\s*'[^']*'|\bsong:\s*'[^']*'/g);
if (leftovers) {
  console.error('leftover hardcodes:', leftovers);
  process.exit(1);
}

fs.writeFileSync(skinsPath, s);
console.log('skins.js transformed OK');
