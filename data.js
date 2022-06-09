export var texts = [
    {
        text:`<h6>Aula 06 - Semáforo</h6>
        <div class="description">
            <p> Nesta atividade é apresentado um semáforo, que foi construído
                utilizando o tinkercad, nele é lido os leds e acendido e apagado
                cada um após certo tempo estimado, para realmente simular um
                semáforo, os componentes utilizados foram:
            </p>
            <ol>
                <li>
                    Led vermelho, verde e amarelo - um componente que transforma
                    energia elétrica em luz, usado para simular as luzes do semáforo;
                </li>
                <li>
                    Resistor de 220Ω - usado para limitar a corrente elétrica do
                    circuito;
                </li>
                <li>
                    Placa de ensaio pequena - é uma matriz de ensaio com furos e
                    fios de cobre usados para a conexão dos dispositivos, neste
                    caso está sendo usado para conectar o resistor nos leds
                    para evitar uma grande carga, causando estragos nos mesmos;
                </li>
                <li>
                    Arduino Uno -é uma placa para prototipagem de projetos de
                    automação, nesta atividade está sendo usado para definir
                    quando cada led deve acender ou apagar;

                </li>
                <li>
                    Conectores verde, vermelho, amarelo e preto - são usados para
                    conectar todos os componentes para assim transmitir as
                    informações e energia para todos.
                </li>
            </ol>
            <p>
                No início foram declarados as saídas utlizadas, ou seja, os LED's. Dentro do
                loop é enviado,
                inicialmente, a informação para ligar o led verde que está conectado na
                porta
                13, logo depois espera
                5 segundos e desliga. Depois de esperar 1 segundo faz o mesmo com o led
                amarelo
                que está conectado
                a porta 12 e finalmente finaliza com a mesma ação de esperar, ativar e
                desativar
                o led vermelho,
                conectado a porta 11.
            </p>
        </div>`, 
        code: ` <pre class="m-0">
        <code class="hljs">void setup()
{
    pinMode(13, OUTPUT);
    pinMode(12, OUTPUT);
    pinMode(11, OUTPUT);
}

void loop(){
    digitalWrite(13, HIGH);
    delay(5000);
    digitalWrite(13, LOW);
    delay(1000);
    digitalWrite(12, HIGH);
    delay(5000);
    digitalWrite(12, LOW);
    delay(1000);
    digitalWrite(11, HIGH);
    delay(5000);
    digitalWrite(11, LOW);
    delay(1000);
}
    </code>                           
</pre>`
    },
    {
        text:`<h6>Aula 07 - Luz de emergência</h6>
        <div class="description">
            <p> Na atividade 07 foi solicitado a criação de uma luz de emergência,
                foi utilizado o tinkercad para criação do protótipo, assim que o
                sensor identifica que não existe luz no local ele manda a
                informação para o arduino e ele acende a luz de energia,
                os componentes utilizados foram:
            </p>
            <ol>
                <li>
                    Lâmpada- Usada para representar a luz que é usada para iluminar
                    quando há pouca luz;
                </li>
                <li>
                    Resistor 300Ω e 10kΩ - usados para limitar a corrente elétrica
                    do circuito;
                </li>
                <li>
                    Placa de ensaio pequena - é uma matriz de ensaio com furos e fios
                    de cobre usados para a conexão dos dispositivos, neste caso está
                    sendo usado para conectar o resistor na lâmpada para evitar uma
                    grande carga, causando estragos nos mesmos;
                </li>
                <li>
                    Arduino Uno - é uma placa para prototipagem de projetos de
                    automação, nesta atividade está sendo usado para definir quando
                    ligar a lâmpada;

                </li>
                <li>
                    Fotoresistor - um sensor de luz utilizado para ler a claridade e
                    enviar as informações para o arduino;
                </li>
                <li>
                    Conectores amarelo, vermelho, preto e laranja - são usados para
                    conectar todos os componentes para assim transmitir as informações
                    e energia para todos.
                </li>
            </ol>
            <p>
                No início a variável LAMPADA é definida come referência a porta 2 e a
                variável
                LUZ como A0, que
                representa o leitor de luz. No setup é declarado que a variável LAMPADA é do
                tipo OUTPUT, ou seja,
                recebe informações e é também iniciado o monitor serial, que apresenta a
                leitura
                das informações.
                No loop na variável luzInfo é informado que a mesma deve conter todas as
                informações da variável LUZ,
                então é feita uma validação onde se a luzInfo for menor que 500 a lâmpada
                deve
                estar acesa, caso seja
                maior a lâmpada deve estar deligada.
            </p>
        </div>`,
        code: `<pre class="m-0">
        <code class="hljs">#define LAMPADA 2
#define LUZ A0

void setup() {
    pinMode(LAMPADA,OUTPUT);
    Serial.begin(9600);
}

void loop() {
    int luzInfo = analogRead(LUZ);

    if(luzInfo < 500){
        digitalWrite(LAMPADA,HIGH);
    }else{
        digitalWrite(LAMPADA,LOW);
    }
}
        </code>                           
    </pre>`
    },
    {
        text:`<h6>Aula 08 - Motor para frente e para trás</h6>
        <div class="description">
            <p>Foi requisitada a prototipação de um motor que anda para frente e para trás
                nesta
                aula,
                novamente foi usado o tinkercad para a elaboração da atividade. Neste
                cenário se
                deve
                construir um motor que ande para frente e para trás para assim simular a
                roda do
                dispositivo
                a ser criado. Seus componentes utilizados foram:
            </p>
            <ol>
                <li>
                    Motor - Usados para simular o motor acoplado a roda do robô;
                </li>
                <li>
                    Inversor hexadecimal - usado como amplificador e conversor das
                    informações
                    enviadas;
                </li>
                <li>
                    Acionador de motor de ponte H - usado para alterar o fluxo da corrente
                    do
                    motor,
                    fazendo o mesmo “andar para trás”;
                </li>
                <li>
                    Placa de ensaio pequena - é uma matriz de ensaio com furos e fios de
                    cobre
                    usados para a conexão
                    dos dispositivos, neste caso usada para conectar o inversor e o
                    acionador ao
                    motor e ao arduino
                    e conectar a fonte de energia com todos;
                </li>
                <li>
                    Arduino Uno - é uma placa para prototipagem de projetos de automação,
                    nesta
                    atividade está sendo
                    usado para definir quando o motor deve ser ativado;
                </li>
                <li>
                    Fonte de energia - usado para gerar energia para o motor;
                </li>
                <li>
                    Conectores amarelo, roxo, vermelho, preto, verde, laranja e ciano - são
                    usados para conectar
                    todos os componentes para assim transmitir as informações e energia para
                    todos.
                </li>
            </ol>
            <p>
                Inicialmente é declarado com qual porta as variáveis IN1, IN2, IN3 e IN4
                estão
                associadas,
                logo depois no setup é declarado que todas são do tipo OUTPUT. No loop
                inicialmente é feito
                in código simulando o motor andando para frente, onde as variáveis IN1, IN2
                e
                IN3 estão acionadas
                e a IN4 não, indicando que os motores devem estar andando para frente.
                Depois de
                2 segundos deve
                deixar somente a IN2 não recebe energia, indicando que o motor está andando
                para
                trás.
            </p>
        </div>`, 
        code: `<pre class="m-0">
        <code class="hljs">int IN1 = 2 ;
int IN2 = 3 ;
int IN3 = 11 ; 
int IN4 = 10 ;

void setup(){
    pinMode(IN1,OUTPUT);
    pinMode(IN2,OUTPUT);	
    pinMode(IN3,OUTPUT);
    pinMode(IN4,OUTPUT);
}
void loop(){
    digitalWrite(IN1,HIGH);
    digitalWrite(IN2,HIGH);
    digitalWrite(IN3,HIGH);
    digitalWrite(IN4,LOW); 

    delay(2000);

    digitalWrite(IN1,HIGH);
    digitalWrite(IN2,LOW);
    digitalWrite(IN3,HIGH);
    digitalWrite(IN4,HIGH);
    delay(2000);

} 

        </code>                           
    </pre>`
    },
    {
        text: `<h6>Aula 09 - Motor controller</h6>
        <div class="description">
            <p>
                Na aula 09 fizemos o protótipo de um sistema que controla dois motores,
                neste
                sistema os motores são
                ativados de acordo com a leitura do sensor, simulando assim a roda andando
                para
                frente, para
                a direita e para a esquerda. Seus componentes utilizados foram:
            </p>
            <ol>
                <li>
                    Motores- Usados para simular o motor acoplado a roda do robô;
                </li>
                <li>
                    Placa de ensaio pequena - é uma matriz de ensaio com furos e fios de
                    cobre
                    usados para a conexão
                    dos dispositivos, neste caso está sendo usado para conectar o resistor
                    aos
                    motores para evitar
                    uma grande carga, causando estragos nos mesmos, e usada também para
                    conectar
                    os motores e o
                    fotoresistor ao arduino;
                </li>
                <li>
                    Arduino Uno - é uma placa para prototipagem de projetos de automação,
                    nesta
                    atividade está sendo
                    usado para definir quando cada motor deve ser ativado;
                </li>
                <li>
                    Fotoresistores - sensores de luz utilizados para ler a claridade e
                    enviar as
                    informações para o
                    arduino;
                </li>
                <li>
                    Acionador de motor de ponte H - usado para alterar o fluxo da corrente
                    do
                    motor,
                    fazendo o mesmo “andar para trás”;
                </li>
                <li>
                    Conectores verde,azul, vermelho, preto e cinza - são usados para
                    conectar
                    todos os componentes
                    para assim transmitir as informações e energia para todos.
                </li>
            </ol>
            <p>
                Inicialmente são declaradas em que cada porta estão associadas as variáveis,
                no
                setup são declaradas
                que as variáveis ligadas aos motores são OUTPUT e as ligadas aos
                fotoresistores
                INPUT_PULLUP. No loop
                são feitas validações onde se o fotoresistor 1 estiver LOW as variáveis
                motor 2
                e 3 devem receber
                informações e as motores 1 e 4 não, para assim andar para frente. Depois
                novamente é feita uma
                validação, onde caso o fotoresistor2 for HIGH os motores 1 e 3 devem receber
                informações e o 2 e 4 não,
                para assim simular andando para trás, senão, os motores 1 e 3 ficam LOW e os
                motores 2 e 4 HiGH.
                Na ultima validação caso a leitura do fotoresistor 3 ser dada como LOW, os
                motores 1 e 4 devem estar recebendo informações enquanto os motores 2 e 3
                não,
                para virar.
            </p>
        </div>`,
        code: `<pre class="m-0">
        <code class="hljs">int motor1 = 1;
int motor2 = 2;
int motor3 = 6;
int motor4 = 7;

int fotoresistor1 = 3;
int fotoresistor2 = 4;
int fotoresistor3 = 5;

void setup(){
    pinMode(motor1, OUTPUT);
    pinMode(motor2, OUTPUT);
    pinMode(motor3, OUTPUT);
    pinMode(motor4, OUTPUT);

    pinMode(fotoresistor1, INPUT_PULLUP);
    pinMode(fotoresistor2, INPUT_PULLUP);
    pinMode(fotoresistor3, INPUT_PULLUP);

}

void loop(){
    if(digitalRead(fotoresistor1) == LOW)
        digitalWrite(motor1, LOW);
        digitalWrite(motor4, LOW);
        digitalWrite(motor2, HIGH);
        digitalWrite(motor3, HIGH);

    if(digitalRead(fotoresistor2) == HIGH)
        digitalWrite(motor1, HIGH);
        digitalWrite(motor3, HIGH);
        digitalWrite(motor2, LOW);
        digitalWrite(motor4, LOW);
        else
        digitalWrite(motor1, LOW);
        digitalWrite(motor3, LOW);
        digitalWrite(motor2, HIGH);
        digitalWrite(motor4, HIGH);

    if(digitalRead(fotoresistor3) == LOW)
        digitalWrite(motor1, HIGH);
        digitalWrite(motor4, HIGH);
        digitalWrite(motor2, LOW);
        digitalWrite(motor3, LOW);
}

        </code>                           
    </pre>`
    }
]

