import { SCENARIOS } from './src/services/scenarios';
import { generateIEP } from './src/services/iepGenerator';
let fails = 0;
for (const s of SCENARIOS) {
  const iep = generateIEP(s.data);
  console.log(`\n=== ${s.title}`);
  console.log('goals:', iep.goals.map(g => `${g.domain}/${g.areaKey}`).join(', ') || '(none)');
  console.log('needs:', iep.needs.map(n => `${n.areaKey}${n.hasGoal?'*':''}[${n.overlap}]`).join(', ') || '(none)');
  console.log('acc:', iep.accommodations.length, 'str:', iep.strategies.length, 'missing:', iep.missing.map(m=>m.kind).join(','));
  for (const r of s.expect(iep)) { console.log(r.pass ? '  PASS' : '  FAIL', r.label); if(!r.pass) fails++; }
}
console.log('\nFAILS:', fails);
