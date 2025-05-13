function bahoTahlili(baholar) {
    const darajalar = { A: 0, B: 0, C: 0, D: 0, F: 0 };

    const { summa, max, min } = baholar.reduce((acc, baho) => {
        acc.summa += baho;
        acc.max = Math.max(acc.max, baho);
        acc.min = Math.min(acc.min, baho);

        if (baho >= 90 && baho <= 100) darajalar.A++;
        else if (baho >= 80) darajalar.B++;
        else if (baho >= 70) darajalar.C++;
        else if (baho >= 60) darajalar.D++;
        else if (baho >= 0) darajalar.F++;
        else console.log("Xato");

        return acc;
    }, { summa: 0, max: baholar[0], min: baholar[0] });

    const o‘rtacha = (summa / baholar.length).toFixed(2);

    return {
        "O'rtacha baho": o‘rtacha,
        "Eng yuqori baho": max,
        "Eng past baho": min,
        "A daraja": darajalar.A,
        "B daraja": darajalar.B,
        "C daraja": darajalar.C,
        "D daraja": darajalar.D,
        "F daraja": darajalar.F
    };
}
