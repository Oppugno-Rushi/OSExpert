# OSExpert

**OSExpert-Eval: Benchmarking General Computer-Use Agents on Professional Expertise**

This repository contains the code and resources for OSExpert, a benchmark for evaluating general computer-use agents on professional expertise tasks.

## 🌐 Website

Visit our project website: **[https://oppugno-rushi.github.io/OSExpert/](https://oppugno-rushi.github.io/OSExpert/)**

## 📋 Overview

OSExpert-Eval shows that current computer-use agents remain far from expert-level: they struggle with long-horizon tasks, generalize poorly to unseen UI designs, lack fine-grained control over action sequences, and still fall well short of human expert efficiency.

## 🎯 Key Features

- **Long-Horizon compositional workflows** (LibreOffice + GIMP)
- **Unseen UI generalization** (Tableau + MiniWord)
- **Fine-grained action execution** (GIMP + LibreOffice)
- **Efficiency** vs. human experts (time-to-complete)

## 📊 Benchmark Scale

- **113** total tasks
- Long Horizon: **30** tasks
- Unseen UI: **50** tasks
- Fine-Grained: **33** tasks

## 🔬 Method

OSExpert learns verifiable skills from **bottom-up self-exploration** and reuses them for robust, efficient inference:

- **GUI-DFS exploration** to discover and verify unit functions
- **Curriculum construction** by composing unit skills into composite procedures
- **Fine-grained action primitives** discovered during exploration and stored as reusable skills
- **Efficiency** via single-pass fast planning and a **skill-boundary check** for early stopping

## 📈 Results

- **+17%** performance gain on OSExpert-Eval
- **89%** efficiency gap closed to humans

## 📚 Resources

- [Project Website](https://oppugno-rushi.github.io/OSExpert/)
- [Paper PDF](docs/assets/files/paper.pdf)
- [GitHub Repository](https://github.com/Oppugno-Rushi/OSExpert)

## 📝 Citation

If you use OSExpert or OSExpert-Eval, please cite:

```bibtex
@inproceedings{osexpert2026,
  title  = {{I'm Professional: Self-Teaching Computer-Use Agents with Professional Skills}},
  author = {{Jiateng Liu, Zhenhailong Wang, Rushi Wang, Bingxuan Li, Jeonghwan Kim, Aditi Tiwari, Pengfei Yu, Denghui Zhang, Heng Ji}},
  year   = {2026},
  note   = {Under review}
}
```

## 👥 Authors

Jiateng Liu, Zhenhailong Wang, Rushi Wang, Bingxuan Li, Jeonghwan Kim, Aditi Tiwari, Pengfei Yu, Denghui Zhang, Heng Ji

## 📄 License

[Add your license information here]
