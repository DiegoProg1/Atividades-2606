function numeroParaTexto(num) {
    switch (num) {
        case "1":
            return "um";
        case "2":
            return "dois";
        case "3":
            return "três";
        case "4":
            return "quatro";
        case "5":
            return "cinco";
        default:
            return "número não reconhecido";
    }
}

numeroParaTexto(1);
numeroParaTexto(2);
numeroParaTexto(3);