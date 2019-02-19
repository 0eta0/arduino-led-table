#define X 0
#define Y 1
#define R 2
#define G 3
#define B 4
// NeoPixel Ring simple sketch (c) 2013 Shae Erisson
// released under the GPLv3 license to match the rest of the AdaFruit NeoPixel library
#include <Adafruit_NeoPixel.h>
#ifdef __AVR__
  #include <avr/power.h>
#endif
// Which pin on the Arduino is connected to the NeoPixels?
// On a Trinket or Gemma we suggest changing this to 1
#define PIN 11
// How many NeoPixels are attached to the Arduino?
#define NUMPIXELS 11
// When we setup the NeoPixel library, we tell it how many pixels, and which pin to use to send signals.
// Note that for older NeoPixel strips you might need to change the third parameter—see the strandtest
// example for more information on possible values.

Adafruit_NeoPixel pixels[] = {
  Adafruit_NeoPixel(NUMPIXELS, 0, NEO_GRB + NEO_KHZ800),
  Adafruit_NeoPixel(NUMPIXELS, 1, NEO_GRB + NEO_KHZ800),
  Adafruit_NeoPixel(NUMPIXELS, 2, NEO_GRB + NEO_KHZ800),
  Adafruit_NeoPixel(NUMPIXELS, 3, NEO_GRB + NEO_KHZ800),
  Adafruit_NeoPixel(NUMPIXELS, 4, NEO_GRB + NEO_KHZ800),
  Adafruit_NeoPixel(NUMPIXELS, 5, NEO_GRB + NEO_KHZ800),
  Adafruit_NeoPixel(NUMPIXELS, 6, NEO_GRB + NEO_KHZ800),
  Adafruit_NeoPixel(NUMPIXELS, 7, NEO_GRB + NEO_KHZ800),
  Adafruit_NeoPixel(NUMPIXELS, 8, NEO_GRB + NEO_KHZ800),
  Adafruit_NeoPixel(NUMPIXELS, 9, NEO_GRB + NEO_KHZ800),
  Adafruit_NeoPixel(NUMPIXELS,  10, NEO_GRB + NEO_KHZ800)
};

void setup() {
  // This is for Trinket 5V 16MHz, you can remove these three lines if you are not using a Trinket
#if defined (__AVR_ATtiny85__)
  if (F_CPU == 16000000) clock_prescale_set(clock_div_1);
#endif
  // End of trinket special code
  for (int i = 0; i < 11; i++) {
    pixels[i].begin(); // This initializes the NeoPixel library.
  }
}

int* serialRead(int* num) {
  if (Serial.available() > 0) {
    for (int i = 0; i < 5; i++) {
      num[i] = Serial.readStringUntil(' ').toInt();
    }
  }
}

void loop() {
  int num[5];
  serialRead(num);

  // pixels.Color takes RGB values, from 0,0,0 up to 255,255,255
  // And sends the updated pixel color to the hardware.
  pixels[num[Y]].setPixelColor(num[X], pixels[num[Y]].Color(num[R], num[G], num[B]));
}