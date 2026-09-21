import { createClient } from '@supabase/supabase-js';
import { FIXTURE } from '../src/data.ts';

const supabaseUrl = 'https://pcgwbarwnbafmgpscgsj.supabase.co';
const supabaseAnonKey = 'sb_publishable_w29w3k_bat-gTi-hSSXYsA_s_uryaXg';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const rows = FIXTURE
  .filter((m) => m.torneo === 'Clausura 2026')
  .map((m) => ({
    match_number: m.match_number,
    rival: m.rival,
    date: m.date,
    time: m.time,
    stadium: m.stadium,
    resultado: m.resultado ?? '',
    logo: m.logo,
    torneo: m.torneo,
  }));

const { data: existing, error: selectError } = await supabase
  .from('fixture')
  .select('*')
  .eq('torneo', 'Clausura 2026');

if (selectError) {
  console.error('Error reading Supabase fixture:', selectError);
  process.exit(1);
}

for (const row of rows) {
  const found = existing?.find((item) => item.match_number === row.match_number);

  if (found) {
    const { error } = await supabase
      .from('fixture')
      .update(row)
      .eq('match_number', row.match_number)
      .eq('torneo', 'Clausura 2026');

    if (error) {
      console.error('Error updating match', row.match_number, error);
      process.exit(1);
    }
  } else {
    const { error } = await supabase.from('fixture').insert(row);
    if (error) {
      console.error('Error inserting match', row.match_number, error);
      process.exit(1);
    }
  }
}

console.log('Fixture synced to Supabase for', rows.length, 'matches.');
