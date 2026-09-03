/**
 * DevFauna Academy — Motor de Evaluación y Validación de Código (Test Runner)
 * Analiza el código escrito por el estudiante contra los objetivos de cada reto.
 */

export class CodeEvaluator {
  static evaluate(userCode, tests = []) {
    if (!tests || tests.length === 0) {
      return {
        passed: true,
        score: 100,
        results: [{ desc: 'Reto de práctica libre', passed: true }]
      };
    }

    const results = tests.map(t => {
      try {
        const passed = t.test(userCode);
        return { desc: t.desc, passed: Boolean(passed) };
      } catch (err) {
        return { desc: t.desc, passed: false, error: err.message };
      }
    });

    const passedCount = results.filter(r => r.passed).length;
    const score = Math.round((passedCount / results.length) * 100);

    return {
      passed: passedCount === results.length,
      score,
      results,
      passedCount,
      totalCount: results.length
    };
  }
}
