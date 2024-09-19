FROM postgres:14

RUN localedef -i th_TH -c -f UTF-8 -A /usr/share/locale/locale.alias th_TH.UTF-8
RUN sed -i 's/# th_TH.UTF-8 UTF-8/th_TH.UTF-8 UTF-8/' /etc/locale.gen && locale-gen

ENV LANG th_TH.utf8
ENV LC_ALL th_TH.utf8

# เพิ่ม timezone สำหรับประเทศไทย
ENV TZ Asia/Bangkok
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
